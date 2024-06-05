import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './interfaces/role.interface';
import { CreateRoleDto } from './dtos/create-role.dto';

@Injectable()
export class RolesService {
    constructor(@InjectModel('Role') private readonly roleModel: Model<Role>) { }

    async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
        const newRole = new this.roleModel(createRoleDto);
        return newRole.save();
    }

    async getAllRoles(): Promise<Role[]> {
        return this.roleModel.find().exec();
    }

    async getRoleById(id: string): Promise<Role> {
        return this.roleModel.findById(id).exec();
    }
}
