import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AttendanceRoutingModule
  ],
  declarations: [AttendanceFormComponent, AttendanceListComponent]
})
export class AttendanceModule { }
