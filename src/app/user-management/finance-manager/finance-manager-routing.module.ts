import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceManagerFormComponent } from './finance-manager-form/finance-manager-form.component';
import { FinanceManagerListComponent } from './finance-manager-list/finance-manager-list.component';
import { FinanceManagerDetailsComponent } from './finance-manager-details/finance-manager-details.component';


const routes: Routes = [
  {
    path: 'list',
    component: FinanceManagerListComponent
  },
  {
    path: 'add',
    component: FinanceManagerFormComponent
  },
  {
    path: 'details/:id',
    component: FinanceManagerDetailsComponent
  },
  {
    path: 'edit/:id',
    component: FinanceManagerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceManagerRoutingModule { }
