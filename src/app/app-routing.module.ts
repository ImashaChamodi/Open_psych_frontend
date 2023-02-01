import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { ServiceComponent } from './shared/service/service.component';
import { LoginComponent } from './shared/login/login.component';
import { ContactComponent } from './shared/contact/contact.component';
import { RegisterComponent } from './shared/register/register.component';
import { DprofileComponent } from './docter/dprofile/dprofile.component';
import { DocterDashboardComponent } from './docter/docter-dashboard/docter-dashboard.component';
import { ChatComponent } from './docter/chat/chat.component';
import { ClinicComponent } from './docter/clinic/clinic.component';
import { HistoryDComponent } from './docter/history-d/history-d.component';
import { IMeetingComponent } from './docter/i-meeting/i-meeting.component';
import { CmeetingComponent } from './user/cmeeting/cmeeting.component';
import { BookappointmentComponent } from './user/bookappointment/bookappointment.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { PrivetmeetingComponent } from './user/privetmeeting/privetmeeting.component';
import { ListComponent } from './user/list/list.component';
import { UserreqComponent } from './user/userreq/userreq.component';
import { MeetdoctorComponent } from './user/meetdoctor/meetdoctor.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'login', component: LoginComponent },
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'dprofile',component:DprofileComponent},
  {path:'ddashboard',component:DocterDashboardComponent},
  { path: 'chat', component:ChatComponent},
  { path: 'clinic', component: ClinicComponent },
  { path: 'individual', component: IMeetingComponent },
  { path: 'history', component: HistoryDComponent},
  {path:'cmeeting',component:CmeetingComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'privetmeeting',component:PrivetmeetingComponent},
  {path:'list',component:ListComponent},
  {path:'userreq/:id',component:UserreqComponent},
  {path:'meetdoctor/:id',component:MeetdoctorComponent},
  {path:'bookappoinment',component:BookappointmentComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

