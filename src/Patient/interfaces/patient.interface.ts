import { Document } from 'mongoose';

export interface Patient extends Document {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    contactInfo: {
        phone: string;
        email: string;
    };
    userId: string;
}
