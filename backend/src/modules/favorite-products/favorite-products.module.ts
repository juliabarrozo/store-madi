import { Module } from '@nestjs/common';
import { FavoriteProductsService } from './favorite-products.service';
import { FavoriteProductsController } from './favorite-products.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FavoriteProductsController],
  providers: [FavoriteProductsService, PrismaService],
})
export class FavoriteProductsModule {}
