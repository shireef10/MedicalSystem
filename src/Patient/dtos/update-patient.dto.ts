class ContactInfo {
    phone?: string;
    email?: string;
}

export class UpdatePatientDto {
    firstName?: string;
    lastName?: string;
    age?: number;
    gender?: string;
    contactInfo?: ContactInfo;
    userId?: string;
}
