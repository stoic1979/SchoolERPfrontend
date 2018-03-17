import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalFormComponent } from './principal-form/principal-form.component';
import { PrincipalListComponent } from './principal-list/principal-list.component';
import { PrincipalDetailsComponent } from './principal-details/principal-details.component';

@NgModule({
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [PrincipalFormComponent, PrincipalListComponent, PrincipalDetailsComponent]
})
export class PrincipalModule { }
