import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema, model } from 'mongoose';
import { Appointment } from './interfaces/appointment.interface';
import { AppointmentsController } from './appointment.controller';
import { AppointmentSchema } from './schemas/appointment.schema';
import { AppointmentsService } from './appointment.service';


// const appointmentSchema = new Schema<Appointment>({
//     day: { type: String, required: true },
//     date: { type: Date, required: true },
//     available: { type: Boolean, default: true },
//     doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
// });

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Appointment', schema: AppointmentSchema }])],
    controllers: [AppointmentsController],
    providers: [AppointmentsService],
})
export class AppointmentModule { }

// export const AppointmentModel = model<Appointment>('Appointment', appointmentSchema);
