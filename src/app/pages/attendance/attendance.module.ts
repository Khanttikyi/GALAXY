import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendancePageRoutingModule } from './attendance-routing.module';

import { AttendancePage } from './attendance.page';
import { AttendanceHistoryComponent } from './attendance-history/attendance-history.component';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRUDTableModule,
    AttendancePageRoutingModule
  ],
  declarations: [AttendancePage,AttendanceHistoryComponent],
  entryComponents:[AttendanceHistoryComponent]
})
export class AttendancePageModule {}
