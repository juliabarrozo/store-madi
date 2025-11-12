import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsInt()
    @IsNotEmpty()
    userId: number;

    @IsString()
    @IsNotEmpty()
    street: String;

    @IsString()
    @IsNotEmpty()
    city: String;

    @IsString()
    @IsNotEmpty()
    state: String;

    @IsString()
    @IsNotEmpty()
    zipCode: String;

    @IsOptional()
    @IsString()
    country: String;
}
