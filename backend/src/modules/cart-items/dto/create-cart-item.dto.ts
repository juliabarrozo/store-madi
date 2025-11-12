import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCartItemDto {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsInt()
    @IsNotEmpty()
    userId: number;

    @IsInt()
    @IsNotEmpty()
    productId: number;

    @IsInt()
    @IsNotEmpty()
    quantity: number;
}
