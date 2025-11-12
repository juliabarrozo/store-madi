import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBrandDto {

    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;
}
