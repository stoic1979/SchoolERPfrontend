import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FinanceManagerRoutingModule } from './finance-manager-routing.module';
import { FinanceManagerFormComponent } from './finance-manager-form/finance-manager-form.component';
import { FinanceManagerListComponent } from './finance-manager-list/finance-manager-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceManagerRoutingModule
  ],
  declarations: [FinanceManagerFormComponent, FinanceManagerListComponent]
})
export class FinanceManagerModule { }
