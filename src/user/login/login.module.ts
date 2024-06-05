// auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './login.controller';
import { AuthService } from './login.service';
import { UserService } from '../registration/userReg.service'; // Import UserService
import { UserDocument } from '../registration/schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserDocument }])],
    controllers: [AuthController],
    providers: [AuthService, UserService], // Provide UserService here
})
export class AuthModule { }

