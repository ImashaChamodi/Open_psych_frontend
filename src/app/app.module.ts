import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { DocterModule } from './docter/docter.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserreqComponent } from './user/userreq/userreq.component';
import { ListComponent } from './user/list/list.component';
import { BookappointmentComponent } from './user/bookappointment/bookappointment.component';
import { MeetdoctorComponent } from './user/meetdoctor/meetdoctor.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DocterModule,
    UserModule,
    HttpClientModule,
    ToastrModule.forRoot(),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
