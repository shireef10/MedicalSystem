import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorsController } from './doctor.controller';
import { DoctorsService } from './doctor.service';
import { DoctorSchema } from './schemas/doctor.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }])],
    controllers: [DoctorsController],
    providers: [DoctorsService],
})
export class DoctorsModule { }
