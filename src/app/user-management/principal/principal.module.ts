import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalFormComponent } from './principal-form/principal-form.component';
import { PrincipalListComponent } from './principal-list/principal-list.component';

@NgModule({
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PrincipalFormComponent, PrincipalListComponent]
})
export class PrincipalModule { }
