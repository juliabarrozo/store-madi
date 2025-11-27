import { IsInt, IsNotEmpty } from "class-validator";

export class CreateFavoriteProductDto {
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @IsInt()
    @IsNotEmpty()
    productId: number;
}
