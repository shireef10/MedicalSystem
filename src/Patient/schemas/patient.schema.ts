import { Schema } from 'mongoose';

export const PatientSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contactInfo: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
