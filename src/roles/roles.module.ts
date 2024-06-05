import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { RoleSchema } from './schemas/role.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Role', schema: RoleSchema }])],
    controllers: [RolesController],
    providers: [RolesService],
})
export class RolesModule { }
