import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus, BadRequestException, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UpdateOrderStatusDto } from './dto/update-order.dto';
import { OrderStatus } from '@prisma/client';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('checkout/:userId')
  @HttpCode(HttpStatus.CREATED)
  checkoutFromCart(@Param('userId', ParseIntPipe) userId: number) {
    try {
      return this.ordersService.checkoutFromCart(+userId);
    }
    catch(Error) {
      throw new BadRequestException(Error.message);
    }
    
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id/status' )
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  updateOrderStatus(@Param('id', ParseIntPipe) id: number, @Body() updateOrderStatusDto: CreateOrderStatusDto) {
    const status: OrderStatus = updateOrderStatusDto.status;
    return this.ordersService.updateOrderStatus(+id, status);
  }
}
