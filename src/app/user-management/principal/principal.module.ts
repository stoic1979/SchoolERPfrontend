import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalFormComponent } from './principal-form/principal-form.component';
import { PrincipalListComponent } from './principal-list/principal-list.component';

@NgModule({
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ],
  declarations: [PrincipalFormComponent, PrincipalListComponent]
})
export class PrincipalModule { }
