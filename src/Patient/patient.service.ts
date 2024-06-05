import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './interfaces/patient.interface';
import { CreatePatientDto } from './dtos/create-patient.dto';
import { UpdatePatientDto } from './dtos/update-patient.dto';

@Injectable()
export class PatientService {
    constructor(@InjectModel('Patient') private readonly patientModel: Model<Patient>) { }

    async create(createPatientDto: CreatePatientDto): Promise<Patient> {
        const newPatient = new this.patientModel(createPatientDto);
        return newPatient.save();
    }

    async findAll(): Promise<Patient[]> {
        return this.patientModel.find().exec();
    }

    async findById(id: string): Promise<Patient> {
        const patient = await this.patientModel.findById(id).exec();
        if (!patient) {
            throw new NotFoundException(`Patient #${id} not found`);
        }
        return patient;
    }

    async update(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient> {
        const updatedPatient = await this.patientModel.findByIdAndUpdate(id, updatePatientDto, { new: true }).exec();
        if (!updatedPatient) {
            throw new NotFoundException(`Patient #${id} not found`);
        }
        return updatedPatient;
    }

    async delete(id: string): Promise<Patient> {
        const deletedPatient = await this.patientModel.findByIdAndDelete(id).exec();
        if (!deletedPatient) {
            throw new NotFoundException(`Patient #${id} not found`);
        }
        return deletedPatient;
    }
}
