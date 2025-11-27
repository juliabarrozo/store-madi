import { Module } from '@nestjs/common';
import { ComboProductsService } from './combo-products.service';
import { ComboProductsController } from './combo-products.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ComboProductsController],
  providers: [ComboProductsService, PrismaService],
})
export class ComboProductsModule {}
