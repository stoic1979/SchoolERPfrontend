import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { TransportManagerRoutingModule } from './transport-manager-routing.module';
import { TransportManagerFormComponent } from './transport-manager-form/transport-manager-form.component';
import { TransportManagerListComponent } from './transport-manager-list/transport-manager-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransportManagerRoutingModule,
    NgxPaginationModule
  ],
  declarations: [TransportManagerFormComponent, TransportManagerListComponent]
})
export class TransportManagerModule { }
