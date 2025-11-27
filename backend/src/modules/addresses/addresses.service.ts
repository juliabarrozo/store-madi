import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}
  
  async create(data: CreateAddressDto) {
    return this.prisma.address.create({ data });
  }

  async findAll() {
    return this.prisma.address.findMany();
  }

  async findOne(id: number) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    if (!address) {
      throw new NotFoundException ('Endereço com id ${id} não encontrado')
    }
  }

  async update(id: number, data: UpdateAddressDto) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    if (!address) {
      throw new NotFoundException(`Endereço com ID ${id} não encontrado.`);
    }
    return this.prisma.address.update({ where: { id }, data });
  }

  async remove(id: number) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    if (!address) {
      throw new NotFoundException(`Endereço com ID ${id} não encontrado.`)
    }
    return this.prisma.address.delete( { where: { id }});
  }
}
