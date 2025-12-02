import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { request } from "http";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) { }
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async validateUser(@Body() signIn: SignInDto) {
        return this.authService.validateUser(signIn.email, signIn.password);       
    }
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}