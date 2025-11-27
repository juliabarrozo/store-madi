import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from 'src/prisma.service';
import { OrderStatus } from '@prisma/client';
import { Product } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async checkoutFromCart(userId: number) {
    return this.prisma.$transaction(async (tx) => {
      // procura carrinho que contenha o id do usuário e produtos
      const cartItems = await tx.cartItem.findMany({ where : { userId }, include : { product: true}, });
      // 1. Se o carrinho possui 0 itens, não cria pedido
      if (cartItems.length === 0) {
        throw new Error('O carrinho está vázio, não é possível finalizar o pedido')
        }
      let totalOrderAmount = 0;
      const orderItemsData: {productId: number; quantity: number; price: number} [] = []; // Dados para criar os OrderItems
      // 2. Iterar, verificar estoque e preparar os OrderItems
      for (const cartItem of cartItems) {
        const product = cartItem.product;
        const quantity = cartItem.quantity;
        if (!product.stock || product.stock < quantity) {
          throw new Error(`Estoque insuficiente para o produto: ${product.name}`);
        }
        // Calcular o total e preparar o item para o pedido
        const itemPrice = product.price; // O preço atual do produto
        totalOrderAmount += itemPrice * quantity; 
        orderItemsData.push({
          productId: product.id,
          quantity: quantity,
          price: itemPrice, // Preço fixado no momento da compra
          });
      }
        // 3. Criar a Order principal
        const newOrder = await tx.order.create({
          data: {
              userId: userId,
              total: totalOrderAmount,
              status: OrderStatus.PENDING, // Pedido criado, aguardando pagamento
                },
        });
        // 4. Criar os OrderItems associados à nova Order
        // Adicionamos o orderId criado no passo 3 a cada item
        const itemsToCreate = orderItemsData.map(item => ({
          ...item,
          orderId: newOrder.id,
        }));
        await tx.orderItem.createMany({
          data: itemsToCreate,
        });
        // 5. DEBITAR O ESTOQUE (Deve ser feito dentro da transação!)
        for (const cartItem of cartItems) {
          await tx.product.update({
            where: { id: cartItem.productId },
            data: {
              stock: { decrement: cartItem.quantity },
            },
          });
        }
        // 6. Limpar o carrinho (remover todos os CartItems do usuário)
        await tx.cartItem.deleteMany({
          where: { userId },
        });
        return newOrder;
    })
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({ 
        where: { id },
        include: { items: true, payment: true, user: true }
    });
    if (!order) {
        throw new NotFoundException(`Pedido com ID ${id} não encontrado.`);
    }
    return order;
  }

  async updateOrderStatus(id: number, newStatus: OrderStatus) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Pedido com ID ${id} não encontrado.`);
    }
    
    return this.prisma.order.update({
      where: { id },
      data: { status: newStatus },
    });
  }
}


