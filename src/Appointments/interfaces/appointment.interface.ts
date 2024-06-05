import { Document, ObjectId } from 'mongoose';

export interface Appointment extends Document {
    day: string;
    date: Date;
    available: boolean;
    doctor: ObjectId;
}
