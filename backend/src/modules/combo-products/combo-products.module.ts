import { Module } from '@nestjs/common';
import { ComboProductsService } from './combo-products.service';
import { ComboProductsController } from './combo-products.controller';

@Module({
  controllers: [ComboProductsController],
  providers: [ComboProductsService],
})
export class ComboProductsModule {}
