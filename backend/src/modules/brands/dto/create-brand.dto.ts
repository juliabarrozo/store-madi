import { Product } from "@prisma/client";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateBrandDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
