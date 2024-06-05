// src/app.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/registration/userReg.module';
import { AuthModule } from './user/login/login.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './Appointments/appointment.module';
import { DoctorsModule } from './Doctors/doctor.module';
import { RolesModule } from './roles/roles.module';
import { JwtAuthMiddleware } from './user/middlewares/jwt-auth.middleware';
import { PatientModule } from './Patient/doctor.module';
import { DoctorPatientAppointmentModule } from './DoctorPatientAppointment/doctor-patient-appointment.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://shireefmohamed15:Shireef123@cluster0.tdguqkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        dbName: 'medSystem'
      }),
    UserModule,
    AuthModule,
    DoctorsModule,
    AppointmentModule,
    RolesModule,
    PatientModule,
    DoctorPatientAppointmentModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtAuthMiddleware)
      .exclude(
        { path: 'login', method: RequestMethod.POST },
        { path: 'user', method: RequestMethod.POST }
      )
      .forRoutes('*');
  }
}