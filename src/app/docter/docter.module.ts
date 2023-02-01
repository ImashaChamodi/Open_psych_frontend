import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DprofileComponent } from './dprofile/dprofile.component';
import { DocterDashboardComponent } from './docter-dashboard/docter-dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { HistoryDComponent } from './history-d/history-d.component';
import { ClinicComponent } from './clinic/clinic.component';
import { IMeetingComponent } from './i-meeting/i-meeting.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DprofileComponent,
    DocterDashboardComponent,
    ChatComponent,
    HistoryDComponent,
    ClinicComponent,
    IMeetingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    DprofileComponent,
    ChatComponent,
    HistoryDComponent,
    ClinicComponent,
    IMeetingComponent,
    DocterDashboardComponent
  ]

})
export class DocterModule { }
