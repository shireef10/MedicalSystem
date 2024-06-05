import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { AppointmentsService } from './appointment.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from './dtos/appointment.dto';
import { Appointment } from './interfaces/appointment.interface';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) { }

    // @Get()
    // async getText(): Promise<string> {
    //     return 'looool';
    // }

    @Post()
    async createAppointment(@Body() createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
        return this.appointmentsService.createAppointment(createAppointmentDto);
    }

    @Get()
    async getAllAppointments(): Promise<Appointment[]> {
        return this.appointmentsService.getAllAppointments();
    }

    @Get(':id')
    async getAppointmentById(@Param('id') id: string): Promise<Appointment> {
        return this.appointmentsService.getAppointmentById(id);
    }

    @Patch(':id')
    async updateAppointment(
        @Param('id') id: string,
        @Body() updateAppointmentDto: UpdateAppointmentDto,
    ): Promise<Appointment> {
        return this.appointmentsService.updateAppointment(id, updateAppointmentDto);
    }

    @Delete(':id')
    async deleteAppointment(@Param('id') id: string): Promise<Appointment> {
        return this.appointmentsService.deleteAppointment(id);
    }
}
