import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { ComboProductsModule } from './modules/combo-products/combo-products.module';
import { FavoriteProductsModule } from './modules/favorite-products/favorite-products.module';
import { CartItemsModule } from './modules/cart-items/cart-items.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { BrandsModule } from './modules/brands/brands.module';
@Module({
  imports: [UsersModule, AuthModule, ProductsModule, OrdersModule, AddressesModule, OrderItemsModule, PaymentsModule, BrandsModule, ComboProductsModule, FavoriteProductsModule, CartItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
