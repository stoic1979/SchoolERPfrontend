import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { StationeryRoutingModule } from './stationery-routing.module';
import { StationeryFormComponent } from './stationery-form/stationery-form.component';
import { StationeryListComponent } from './stationery-list/stationery-list.component';
import { StationeryItemsComponent } from './stationery-items/stationery-items.component';
import { EditableTableModule } from '../../editable-table/editable-table.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StationeryRoutingModule,
    EditableTableModule
  ],
  declarations: [StationeryFormComponent, StationeryListComponent, StationeryItemsComponent]
})
export class StationeryModule { }
