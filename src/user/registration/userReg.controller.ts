import { Controller, Get, Post, Body, Param, Put, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './userReg.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';

@Controller('registration')
export class UsersController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get('profile')
  getProfile(@Req() req: Request): User {
    return req.user;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: any) {
    return this.userService.update(id, userDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
