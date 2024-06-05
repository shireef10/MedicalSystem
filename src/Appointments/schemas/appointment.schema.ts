import * as mongoose from 'mongoose';

export const AppointmentSchema = new mongoose.Schema({
    day: String,
    date: Date,
    available: Boolean,
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
});

export interface Appointment extends mongoose.Document {
    day: string;
    date: Date;
    available: boolean;
    doctor: mongoose.Types.ObjectId;
}

// const appointmentSchema = new Schema<Appointment>({
//     day: { type: String, required: true },
//     date: { type: Date, required: true },
//     available: { type: Boolean, default: true },
//     doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
// });