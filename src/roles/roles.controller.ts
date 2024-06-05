import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dtos/create-role.dto';
import { Role } from './interfaces/role.interface';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) { }

    @Post()
    async createRole(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
        return this.rolesService.createRole(createRoleDto);
    }

    @Get()
    async getAllRoles(): Promise<Role[]> {
        return this.rolesService.getAllRoles();
    }

    @Get(':id')
    async getRoleById(@Param('id') id: string): Promise<Role> {
        return this.rolesService.getRoleById(id);
    }
}
