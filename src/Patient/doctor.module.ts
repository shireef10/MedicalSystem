import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsController } from './patient.controller';
import { PatientService } from './patient.service';
import { PatientSchema } from './schemas/patient.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Patient', schema: PatientSchema }])],
    controllers: [PatientsController],
    providers: [PatientService],
})
export class PatientModule { }
