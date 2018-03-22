import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationeryRoutingModule } from './stationery-routing.module';
import { StationeryFormComponent } from './stationery-form/stationery-form.component';
import { StationeryListComponent } from './stationery-list/stationery-list.component';


@NgModule({
  imports: [
    CommonModule,
    StationeryRoutingModule
  ],
  declarations: [StationeryFormComponent, StationeryListComponent]
})
export class StationeryModule { }
