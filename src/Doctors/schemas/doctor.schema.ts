import { Schema } from 'mongoose';

export const DoctorSchema = new Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
