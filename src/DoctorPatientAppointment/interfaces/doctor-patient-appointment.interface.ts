import { Document } from 'mongoose';

export interface DoctorPatientAppointment extends Document {
    readonly patientId: string;
    readonly appointmentId: string;
}
