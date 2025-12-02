import { Module } from '@nestjs/common';
import { ComboProductsService } from './combo-products.service';
import { ComboProductsController } from './combo-products.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ComboProductsController],
  providers: [ComboProductsService, PrismaService],
})
export class ComboProductsModule {}
