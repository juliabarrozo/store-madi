import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}
  
  async create(data: CreateBrandDto) {
    return this.prisma.brand.create({ data });
  }

  async findAll() {
    return this.prisma.brand.findMany();
  }

  async findOne(id: number) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    if (!brand) {
      throw new NotFoundException(`Marca com ID ${id} não encontrada.`)
    }
  }

  async update(id: number, data: UpdateBrandDto) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    if (!brand) {
      throw new NotFoundException(`Marca com ID ${id} não encontrada.`);
    }
    return this.prisma.brand.update( { where : { id }, data });
  }

  async remove(id: number) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    if (!brand) {
      throw new NotFoundException(`Marca com ID ${id} não encontrada.`);
    }
    return this.prisma.brand.delete( { where : { id } });
  }
}
