import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

import { PrivetmeetingComponent } from './privetmeeting/privetmeeting.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmeetingComponent } from './cmeeting/cmeeting.component';

import { ListComponent } from './list/list.component';
import { UserreqComponent } from './userreq/userreq.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { MeetdoctorComponent } from './meetdoctor/meetdoctor.component';


@NgModule({
  declarations: [
    UserdashboardComponent,
    CmeetingComponent,
    PrivetmeetingComponent,

    ListComponent,
     UserreqComponent,
     BookappointmentComponent,
     MeetdoctorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserdashboardComponent,

    CmeetingComponent,
    PrivetmeetingComponent
  ]
})
export class UserModule { }
