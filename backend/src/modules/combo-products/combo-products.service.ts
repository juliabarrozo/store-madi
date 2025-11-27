import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComboProductDto } from './dto/create-combo-product.dto';
import { UpdateComboProductDto } from './dto/update-combo-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ComboProductsService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateComboProductDto) {
    return this.prisma.comboProduct.create({ data });
  }

  async findAll() {
    return this.prisma.comboProduct.findMany();
  }

  async findOne(id: number) {
    const comboProduct = await this.prisma.comboProduct.findUnique({ where: { id } });
    if (!comboProduct) {
      throw new NotFoundException(`Combo com ID ${id} não encontrado.`);
    }
  }

  async update(id: number, data: UpdateComboProductDto) {
    // Verifica se o pedido existe antes de tentar atualizar
    const comboProduct = await this.prisma.comboProduct.findUnique({ where: { id } });
    if (!comboProduct) {
      throw new NotFoundException(`Combo com ID ${id} não encontrado.`);
    }
    return this.prisma.comboProduct.update({ where : { id }, data });
  }

  async remove(id: number) {
    const comboProduct = await this.prisma.comboProduct.findUnique({ where: { id } });
    if (!comboProduct) {
      throw new NotFoundException(`Combo com ID ${id} não encontrado.`);
    }
    return this.prisma.comboProduct.delete({ where : {id} });
  }
}
