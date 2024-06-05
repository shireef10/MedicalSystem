import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './login.service';
import { CreateUserDto } from '../registration/dtos/create-user.dto';
import { User } from '../registration/interfaces/user.interface'; // Import your user interface

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get()
    async getText(): Promise<string> {
        return 'looool';
    }

    @Post()
    async login(@Body('email') email: string, @Body('password') password: string) {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            return { message: 'Invalid credentials' };
        }
        const token = await this.authService.login(user);
        return { token };
    }
}
