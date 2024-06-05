import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dtos/create-patient.dto';
import { UpdatePatientDto } from './dtos/update-patient.dto';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientService: PatientService) { }

    @Post()
    async create(@Body() createPatientDto: CreatePatientDto) {
        return this.patientService.create(createPatientDto);
    }

    @Get()
    async findAll() {
        return this.patientService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.patientService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
        return this.patientService.update(id, updatePatientDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.patientService.delete(id);
    }
}
