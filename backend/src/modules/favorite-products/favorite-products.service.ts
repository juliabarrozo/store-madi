import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavoriteProductDto } from './dto/create-favorite-product.dto';
import { UpdateFavoriteProductDto } from './dto/update-favorite-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FavoriteProductsService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateFavoriteProductDto) {
    return this.prisma.favoriteProduct.create({ data });
  }

  async findAll() {
    return this.prisma.favoriteProduct.findMany();
  }

  async findOne(id: number) {
    const favoriteProduct = await this.prisma.favoriteProduct.findUnique({ where: { id } });
    if (!favoriteProduct) {
      throw new NotFoundException(`Favorito com ID ${id} não encontrado.`);
    }
  }

  async update(id: number, data: UpdateFavoriteProductDto) {
    // Verifica se o pedido existe antes de tentar atualizar
    const favoriteProduct = await this.prisma.favoriteProduct.findUnique({ where: { id } });
    if (!favoriteProduct) {
      throw new NotFoundException(`Favorito com ID ${id} não encontrado.`);
    }
    return this.prisma.favoriteProduct.update({where: {id}, data});
  }

  async remove(id: number) {
    const favoriteProduct = await this.prisma.favoriteProduct.findUnique({ where: { id } });
    if (!favoriteProduct) {
      throw new NotFoundException(`Favorito com ID ${id} não encontrado.`);
    }
    return this.prisma.favoriteProduct.delete({where: {id}});
  }
}
