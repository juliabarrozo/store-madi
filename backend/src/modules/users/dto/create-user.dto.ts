import { CartItem, FavoriteProduct, Order, UserRole } from "@prisma/client"
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEnum(UserRole)
    role?: UserRole;

    @IsNotEmpty()
    @IsString()
    ddd: string;

    @IsNotEmpty()
    @IsString()
    phone: string;
}
