import { UserRole } from "@prisma/client"
import { IsEnum, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: String;

    @IsString()
    @IsNotEmpty()
    email: String;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: String;

    @IsNotEmpty()
    @IsEnum(UserRole)
    role?: UserRole;

    @IsNotEmpty()
    @IsString()
    ddd: String;

    @IsNotEmpty()
    @IsString()
    phone: String;
}
