import { IsEnum } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class CreateOrderStatusDto {  
    @IsEnum(OrderStatus, {
    message: `O status deve ser um dos seguintes valores: ${Object.values(OrderStatus).join(', ')}`,
  })
    status: OrderStatus; 
}

