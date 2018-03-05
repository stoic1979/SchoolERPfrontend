import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalFormComponent } from './principal-form/principal-form.component';
import { PrincipalListComponent } from './principal-list/principal-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: PrincipalListComponent
  },
  {
    path: 'add',
    component: PrincipalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
