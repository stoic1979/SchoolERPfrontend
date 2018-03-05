import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceManagerRoutingModule } from './finance-manager-routing.module';
import { FinanceManagerFormComponent } from './finance-manager-form/finance-manager-form.component';
import { FinanceManagerListComponent } from './finance-manager-list/finance-manager-list.component';

@NgModule({
  imports: [
    CommonModule,
    FinanceManagerRoutingModule
  ],
  declarations: [FinanceManagerFormComponent, FinanceManagerListComponent]
})
export class FinanceManagerModule { }
