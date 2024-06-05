export class CreateAppointmentDto {
    day: string;
    date: Date;
    available: boolean;
    doctor: string;
}

export class UpdateAppointmentDto {
    day?: string;
    date?: Date;
    available?: boolean;
    doctor?: string;
}
