import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounsellorFormComponent } from './counsellor-form/counsellor-form.component';
import { CounsellorListComponent } from './counsellor-list/counsellor-list.component';
import { CounsellorDetailsComponent } from './counsellor-details/counsellor-details.component';


const routes: Routes = [
  {
    path: 'list',
    component: CounsellorListComponent
  },
  {
    path: 'add',
    component: CounsellorFormComponent
  },
  {
    path: 'details',
    component: CounsellorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounsellorRoutingModule { }