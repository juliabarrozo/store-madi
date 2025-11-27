import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateComboProductDto {
    @IsInt()
    @IsNotEmpty()
    productAId: number;

    @IsInt()
    @IsNotEmpty()
    productBId: number;
}
