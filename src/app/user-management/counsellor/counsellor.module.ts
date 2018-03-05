import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounsellorRoutingModule } from './counsellor-routing.module';
import { CounsellorFormComponent } from './counsellor-form/counsellor-form.component';
import { CounsellorListComponent } from './counsellor-list/counsellor-list.component';

@NgModule({
  imports: [
    CommonModule,
    CounsellorRoutingModule
  ],
  declarations: [CounsellorFormComponent, CounsellorListComponent]
})
export class CounsellorModule { }
