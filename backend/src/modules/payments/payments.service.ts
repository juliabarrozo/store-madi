import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePaymentDto) {
    return this.prisma.payment.create({ data });
  }

  async findAll() {
    return this.prisma.payment.findMany();
  }

  async findOne(id: number) {
    const payment = await this.prisma.payment.findUnique({ where: { id } });
    if (!payment) {
      throw new NotFoundException(`Pedido com ID ${id} não encontrado.`);
    }
  }

  async update(id: number, data: UpdatePaymentDto) {
    const payment = await this.prisma.payment.findUnique({ where: { id } });
    if (!payment) {
      throw new NotFoundException(`Pedido com ID ${id} não encontrado.`);
    }
    return this.prisma.payment.update({ where : { id }, data});
  }

  async remove(id: number) {
    const payment = await this.prisma.payment.findUnique({ where: { id } });
    if (!payment) {
      throw new NotFoundException(`Pedido com ID ${id} não encontrado.`);
    }
    return this.prisma.payment.delete({ where : { id }});
  }
}
