import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment } from './interfaces/appointment.interface';
import { CreateAppointmentDto, UpdateAppointmentDto } from './dtos/appointment.dto';
import { log } from 'console';

@Injectable()
export class AppointmentsService {
    constructor(@InjectModel('Appointment') private readonly appointmentModel: Model<Appointment>) { }

    async createAppointment(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
        const createdAppointment = new this.appointmentModel(createAppointmentDto);
        console.log(createAppointmentDto);
        return createdAppointment.save();
    }

    async getAllAppointments(): Promise<Appointment[]> {
        return this.appointmentModel.find().exec();
    }

    async getAppointmentById(id: string): Promise<Appointment> {
        const appointment = await this.appointmentModel.findById(id).exec();
        if (!appointment) {
            throw new NotFoundException('Appointment not found');
        }
        return appointment;
    }

    async updateAppointment(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
        const updatedAppointment = await this.appointmentModel.findByIdAndUpdate(id, updateAppointmentDto, {
            new: true,
        });
        if (!updatedAppointment) {
            throw new NotFoundException('Appointment not found');
        }
        return updatedAppointment;
    }

    async deleteAppointment(id: string): Promise<Appointment> {
        const deletedAppointment = await this.appointmentModel.findByIdAndDelete(id);
        if (!deletedAppointment) {
            throw new NotFoundException('Appointment not found');
        }
        return deletedAppointment;
    }
}
