import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';


const routes: Routes = [
  {
    path: 'list',
    component: TeacherListComponent
  },
  {
    path: 'add',
    component: TeacherFormComponent
  },
  {
    path: 'details',
    component: TeacherDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
