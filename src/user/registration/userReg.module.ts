// src/users/user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './userReg.controller';
import { UserService } from './userReg.service';
import { UserDocument } from './schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserDocument }])],
    controllers: [UsersController],
    providers: [UserService],
    exports: [UserService], // Make sure to export UserService

})
export class UserModule { }
