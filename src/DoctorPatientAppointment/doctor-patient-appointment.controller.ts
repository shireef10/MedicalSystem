import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { DoctorPatientAppointmentService } from './doctor-patient-appointment.service';
import { CreateDoctorPatientAppointmentDto } from './dtos/create-doctor-patient-appointment.dto';
import { UpdateDoctorPatientAppointmentDto } from './dtos/update-doctor-patient-appointment.dto';

@Controller('doctor-patient-appointments')
export class DoctorPatientAppointmentController {
    constructor(private readonly doctorPatientAppointmentService: DoctorPatientAppointmentService) { }

    @Post()
    async create(@Body() createDoctorPatientAppointmentDto: CreateDoctorPatientAppointmentDto) {
        return this.doctorPatientAppointmentService.create(createDoctorPatientAppointmentDto);
    }

    @Get()
    async findAll() {
        return this.doctorPatientAppointmentService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.doctorPatientAppointmentService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDoctorPatientAppointmentDto: UpdateDoctorPatientAppointmentDto) {
        return this.doctorPatientAppointmentService.update(id, updateDoctorPatientAppointmentDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.doctorPatientAppointmentService.delete(id);
    }
}
