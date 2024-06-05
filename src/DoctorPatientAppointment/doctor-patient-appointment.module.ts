import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorPatientAppointmentController } from './doctor-patient-appointment.controller';
import { DoctorPatientAppointmentService } from './doctor-patient-appointment.service';
import { DoctorPatientAppointmentSchema } from './schemas/doctor-patient-appointment.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'DoctorPatientAppointment', schema: DoctorPatientAppointmentSchema }])],
    controllers: [DoctorPatientAppointmentController],
    providers: [DoctorPatientAppointmentService],
})
export class DoctorPatientAppointmentModule { }
