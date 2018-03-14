import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { CounsellorRoutingModule } from './counsellor-routing.module';
import { CounsellorFormComponent } from './counsellor-form/counsellor-form.component';
import { CounsellorListComponent } from './counsellor-list/counsellor-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CounsellorRoutingModule,
    NgxPaginationModule
  ],
  declarations: [CounsellorFormComponent, CounsellorListComponent]
})
export class CounsellorModule { }
