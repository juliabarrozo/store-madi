import { Module } from '@nestjs/common';
import { FavoriteProductsService } from './favorite-products.service';
import { FavoriteProductsController } from './favorite-products.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [FavoriteProductsService],
  controllers: [FavoriteProductsController],
  providers: [FavoriteProductsService],
})
export class FavoriteProductsModule {}
