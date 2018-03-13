import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

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
  },
  {
    path: 'details',
    component: StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
