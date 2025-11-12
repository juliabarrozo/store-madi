import { OrderStatus } from "@prisma/client";
import { IsEnum, IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {
    @IsInt()
    @IsNotEmpty()
    id: number;
    
    @IsNumber()
    @IsNotEmpty()
    total: number;

    @IsEnum(OrderStatus)
    @IsNotEmpty()
    orderStatus: OrderStatus

    @IsInt()
    @IsNotEmpty()
    userId: number;
}
