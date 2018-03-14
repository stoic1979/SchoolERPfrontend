import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [TeacherFormComponent, TeacherListComponent]
})
export class TeacherModule { }
