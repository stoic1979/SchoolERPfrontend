import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { CounsellorRoutingModule } from './counsellor-routing.module';
import { CounsellorFormComponent } from './counsellor-form/counsellor-form.component';
import { CounsellorListComponent } from './counsellor-list/counsellor-list.component';
import { CounsellorDetailsComponent } from './counsellor-details/counsellor-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CounsellorRoutingModule,
    NgxPaginationModule
  ],
  declarations: [CounsellorFormComponent, CounsellorListComponent, CounsellorDetailsComponent]
})
export class CounsellorModule { }
