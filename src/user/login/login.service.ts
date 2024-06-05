import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from '../registration/userReg.service';
import * as jwt from 'jsonwebtoken'; // Import JWT
import * as fs from 'fs';
import * as path from 'path';
import { CreateUserDto } from '../registration/dtos/create-user.dto';
import { UserDocument } from '../registration/schemas/user.schema';
import { User } from '../registration/interfaces/user.interface';

const TEMP_SECRET_KEY = '123';

@Injectable()
export class AuthService {
    userModel: any;
    constructor(private userService: UserService) { }


    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    async login(user: any): Promise<string> {
        const payload = { email: user.email, sub: user._id };
        const token = jwt.sign(payload, TEMP_SECRET_KEY);
        return token;
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
