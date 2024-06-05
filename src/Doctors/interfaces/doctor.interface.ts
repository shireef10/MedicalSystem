import { Document, Types } from 'mongoose';

export interface Doctor extends Document {
    name: string;
    specialization: string;
    phoneNumber: string;
    email: string;
    userId: Types.ObjectId;
}
