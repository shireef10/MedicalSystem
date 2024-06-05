class ContactInfo {
    phone: string;
    email: string;
}

export class CreatePatientDto {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    contactInfo: ContactInfo;
    userId: string;
}
