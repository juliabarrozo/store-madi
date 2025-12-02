import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartItemsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCartItemDto) {
    return this.prisma.cartItem.create({ data })
  }

  async getUserCartById(userId: number) {
    return this.prisma.cartItem.findMany({ where : { userId }, include : {product: true, user: true}})
  }
  
  async findOne(id: number) {
    const cartItem = await this.prisma.cartItem.findUnique({ where: { id } });
    if (!cartItem) {
      throw new NotFoundException(`Item do carrinho com ID ${id} não encontrado.`);
    }  }

  async update(id: number, data: UpdateCartItemDto) {
    const cartItem = await this.prisma.cartItem.findUnique({ where: { id } });
    if (!cartItem) {
      throw new NotFoundException(`Item do carrinho com ID ${id} não encontrado.`);
    }
    return this.prisma.cartItem.update( { where : { id }, data});
  }

  async remove(id: number) {
    const cartItem = await this.prisma.cartItem.findUnique({ where: { id } });
    if (!cartItem) {
      throw new NotFoundException(`Item do carrinho com ID ${id} não encontrado.`);
    }
    return this.prisma.cartItem.delete({ where : { id }});
  }
}
