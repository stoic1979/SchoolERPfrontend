import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportManagerFormComponent } from './transport-manager-form/transport-manager-form.component';
import { TransportManagerListComponent } from './transport-manager-list/transport-manager-list.component';
import { TransportManagerDetailsComponent } from './transport-manager-details/transport-manager-details.component';


const routes: Routes = [
  {
    path: 'list',
    component: TransportManagerListComponent
  },
  {
    path: 'add',
    component: TransportManagerFormComponent
  },
  {
    path: 'details/:id',
    component: TransportManagerDetailsComponent
  },
  {
    path: 'edit/:id',
    component: TransportManagerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportManagerRoutingModule { }