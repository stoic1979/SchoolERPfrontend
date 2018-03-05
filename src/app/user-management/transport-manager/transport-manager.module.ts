import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportManagerRoutingModule } from './transport-manager-routing.module';
import { TransportManagerFormComponent } from './transport-manager-form/transport-manager-form.component';
import { TransportManagerListComponent } from './transport-manager-list/transport-manager-list.component';

@NgModule({
  imports: [
    CommonModule,
    TransportManagerRoutingModule
  ],
  declarations: [TransportManagerFormComponent, TransportManagerListComponent]
})
export class TransportManagerModule { }
