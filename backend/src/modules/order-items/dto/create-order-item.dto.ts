import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderItemDto {

    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsInt()
    orderId: number;

    @IsNotEmpty()
    @IsInt() 
    productId: number;

    @IsNotEmpty()
    @IsInt() 
    quantity: number;
    
    @IsNumber()
    @IsNotEmpty()
    price: number;

}
