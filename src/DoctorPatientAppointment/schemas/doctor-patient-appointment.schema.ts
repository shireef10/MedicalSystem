import { Schema } from 'mongoose';

export const DoctorPatientAppointmentSchema = new Schema({
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    appointmentId: { type: Schema.Types.ObjectId, ref: 'Appointment', required: true },
});
