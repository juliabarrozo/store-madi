import { PaymentStatus } from "@prisma/client";
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePaymentDto {

    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    orderId: number;

    @IsNotEmpty()
    @IsString()
    method: String;

    @IsNotEmpty()
    @IsNumber()
    amount: number;
    
    @IsNotEmpty()
    @IsEnum(PaymentStatus)
    paymentStatus: PaymentStatus;
}
