import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor } from './interfaces/doctor.interface';
import { CreateDoctorDto, UpdateDoctorDto } from './dtos/doctor.dto';

@Injectable()
export class DoctorsService {
    constructor(@InjectModel('Doctor') private readonly doctorModel: Model<Doctor>) { }

    async createDoctor(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
        const newDoctor = new this.doctorModel(createDoctorDto);
        return newDoctor.save();
    }

    async getAllDoctors(): Promise<Doctor[]> {
        return this.doctorModel.find().exec();
    }

    async getDoctorById(id: string): Promise<Doctor> {
        return this.doctorModel.findById(id).exec();
    }

    async updateDoctor(id: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
        return this.doctorModel.findByIdAndUpdate(id, updateDoctorDto, { new: true }).exec();
    }

    async deleteDoctor(id: string): Promise<Doctor> {
        return this.doctorModel.findByIdAndDelete(id).exec();
    }
}
