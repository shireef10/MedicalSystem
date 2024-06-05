import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { DoctorsService } from './doctor.service';
import { CreateDoctorDto, UpdateDoctorDto } from './dtos/doctor.dto';
import { Doctor } from './interfaces/doctor.interface';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) { }

    @Post()
    async createDoctor(@Body() createDoctorDto: CreateDoctorDto): Promise<Doctor> {
        return this.doctorsService.createDoctor(createDoctorDto);
    }

    @Get()
    async getAllDoctors(): Promise<Doctor[]> {
        return this.doctorsService.getAllDoctors();
    }

    @Get(':id')
    async getDoctorById(@Param('id') id: string): Promise<Doctor> {
        return this.doctorsService.getDoctorById(id);
    }

    @Patch(':id')
    async updateDoctor(
        @Param('id') id: string,
        @Body() updateDoctorDto: UpdateDoctorDto,
    ): Promise<Doctor> {
        return this.doctorsService.updateDoctor(id, updateDoctorDto);
    }

    @Delete(':id')
    async deleteDoctor(@Param('id') id: string): Promise<Doctor> {
        return this.doctorsService.deleteDoctor(id);
    }
}
