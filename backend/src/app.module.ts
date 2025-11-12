import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { PaymentModule } from './payment/payment.module';
import { BrandModule } from './modules/brand/brand.module';
import { ComboProductsModule } from './modules/combo-products/combo-products.module';
import { FavoriteProductsModule } from './modules/favorite-products/favorite-products.module';

@Module({
  imports: [UsersModule, AuthModule, ProductsModule, CartModule, OrdersModule, FavoritesModule, AddressesModule, OrderItemsModule, PaymentModule, BrandModule, ComboProductsModule, FavoriteProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
