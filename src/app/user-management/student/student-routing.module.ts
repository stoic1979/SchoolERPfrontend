import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SearchStudentComponent } from './search-student/search-student.component';

const routes: Routes = [
  {
    path: 'list',
    component: StudentListComponent
  },
  {
    path: 'add',
    component: StudentFormComponent
  },
  {
    path: 'search',
    component: SearchStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
