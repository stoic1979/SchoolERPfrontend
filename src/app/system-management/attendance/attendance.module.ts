import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { EditableTableModule } from '../../editable-table/editable-table.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    EditableTableModule,
    AttendanceRoutingModule
  ],
  declarations: [AttendanceFormComponent, AttendanceListComponent]
})
export class AttendanceModule { }
