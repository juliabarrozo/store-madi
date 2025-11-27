import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'src/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}
  
  async create(data: CreateOrderItemDto) {
    return this.prisma.orderItem.create({ data });
  }

  async getItemsByOrderId(id: number) {
    const orderItem = await this.prisma.orderItem.findMany({ where : { id }, include : { product: true }, orderBy : { createdAt : 'asc'}});
    if (!orderItem) {
      throw new NotFoundException(`Pedido com id ${id} não pode ser encontrado`);
    }
  }

  async getOneItemByOrderId(id: number) {
    const orderItem = await this.prisma.orderItem.findUnique({ where : { id }, include : { product: true }});
    if (!orderItem) {
      throw new NotFoundException(`Item do pedido com id ${id} não pode ser encontrado`);
    }
  }

  async update(id: number, data: UpdateOrderItemDto) {
    const orderItem = await this.prisma.orderItem.findUnique({ where: { id } });
    if (!orderItem) {
      throw new NotFoundException(`Item do pedido com ID ${id} não encontrado.`);
    }
    return this.prisma.orderItem.update({ where: {id}, data});
  }

  async remove(id: number) {
    const orderItem = await this.prisma.orderItem.findUnique({ where: { id } });
    if (!orderItem) {
      throw new NotFoundException(`Item do pedido com ID ${id} não encontrado.`);
    }
    return this.prisma.orderItem.delete({ where : {id}});
  }
}
