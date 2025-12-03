import { Module } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CartItemsController } from './cart-items.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [CartItemsService],
  controllers: [CartItemsController],
  providers: [CartItemsService],
})
export class CartItemsModule {}
