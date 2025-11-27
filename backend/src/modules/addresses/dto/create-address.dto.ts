import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {

    @IsInt()
    @IsNotEmpty()
    userId: number;

    @IsString()
    @IsNotEmpty()
    street: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    zipCode: string;

    @IsNotEmpty()
    @IsString()
    country: string;
}
