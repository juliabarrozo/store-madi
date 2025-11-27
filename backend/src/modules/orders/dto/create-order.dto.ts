import { OrderStatus, Payment } from "@prisma/client";
import { IsEnum, IsInt, IsNotEmpty, IsNumber } from "class-validator";
import { CreateOrderItemDto } from "src/modules/order-items/dto/create-order-item.dto";

export class CreateOrderDto {  
    @IsNumber()
    @IsNotEmpty()
    total: number;

    @IsEnum(OrderStatus)
    @IsNotEmpty()
    orderStatus: OrderStatus

    @IsInt()
    @IsNotEmpty()
    userId: number;

    items: CreateOrderItemDto[]

    payment?: Payment
}
