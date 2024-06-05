import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoctorPatientAppointment } from './interfaces/doctor-patient-appointment.interface';
import { CreateDoctorPatientAppointmentDto } from './dtos/create-doctor-patient-appointment.dto';
import { UpdateDoctorPatientAppointmentDto } from './dtos/update-doctor-patient-appointment.dto';

@Injectable()
export class DoctorPatientAppointmentService {
    constructor(@InjectModel('DoctorPatientAppointment') private readonly doctorPatientAppointmentModel: Model<DoctorPatientAppointment>) { }

    async create(createDoctorPatientAppointmentDto: CreateDoctorPatientAppointmentDto): Promise<DoctorPatientAppointment> {
        const newRecord = new this.doctorPatientAppointmentModel(createDoctorPatientAppointmentDto);
        return newRecord.save();
    }

    async findAll(): Promise<DoctorPatientAppointment[]> {
        return this.doctorPatientAppointmentModel.find().exec();
    }

    async findById(id: string): Promise<DoctorPatientAppointment> {
        const record = await this.doctorPatientAppointmentModel.findById(id).exec();
        if (!record) {
            throw new NotFoundException(`Record #${id} not found`);
        }
        return record;
    }

    async update(id: string, updateDoctorPatientAppointmentDto: UpdateDoctorPatientAppointmentDto): Promise<DoctorPatientAppointment> {
        const updatedRecord = await this.doctorPatientAppointmentModel.findByIdAndUpdate(id, updateDoctorPatientAppointmentDto, { new: true }).exec();
        if (!updatedRecord) {
            throw new NotFoundException(`Record #${id} not found`);
        }
        return updatedRecord;
    }

    async delete(id: string): Promise<DoctorPatientAppointment> {
        const deletedRecord = await this.doctorPatientAppointmentModel.findByIdAndDelete(id).exec();
        if (!deletedRecord) {
            throw new NotFoundException(`Record #${id} not found`);
        }
        return deletedRecord;
    }
}
