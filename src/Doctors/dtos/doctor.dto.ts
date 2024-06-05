export class CreateDoctorDto {
    readonly name: string;
    readonly specialization: string;
    readonly phoneNumber: string;
    readonly email: string;
    readonly userId: string;
}

export class UpdateDoctorDto {
    readonly name?: string;
    readonly specialization?: string;
    readonly phoneNumber?: string;
    readonly email?: string;
    readonly userId?: string;
}
