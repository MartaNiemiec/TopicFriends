/**
 * Created by anna on 24/06/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MeetingListComponent }    from './meeting-list.component';
import { MeetingListItemComponent }  from './meeting-list-item/meeting-list-item.component';
import { MeetingDetailsComponent }  from './meeting-details/meeting-details.component';
import { MatListModule, MatCardModule, MatButtonModule } from '@angular/material';
import { GoingButtonComponent } from './going-button/going-button.component';
import {MeetingAttendanceService} from './meeting-attendance.service';
import {MatProgressSpinnerModule} from '@angular/material';
import { MeetingAttendanceUserListComponent } from './meeting-attendance-user-list/meeting-attendance-user-list.component';
import {UserTemplateComponent} from '../user-list/user-template/user-template.component';
import {AppModule} from '../app.module';
import {SharedModule} from '../shared/shared.module';

const meetingRoutes: Routes = [
  { path: 'meeting-list',  component: MeetingListComponent },
  { path: 'meeting-details/:meetingId', component: MeetingDetailsComponent }, /* old */
  { path: 'meeting/:meetingId', component: MeetingDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(meetingRoutes),
    MatProgressSpinnerModule,
    SharedModule,
  ],
  declarations: [
    MeetingListComponent,
    MeetingListItemComponent,
    MeetingDetailsComponent,
    GoingButtonComponent,
    MeetingAttendanceUserListComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MeetingAttendanceService
  ]
})
export class MeetingsModule { }
