import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationeryFormComponent } from './stationery-form/stationery-form.component';
import { StationeryListComponent } from './stationery-list/stationery-list.component';
import { StationeryItemsComponent } from './stationery-items/stationery-items.component';
const routes: Routes = [
	{
		path: 'list',
		component: StationeryListComponent
	},
	{
		path: 'add',
		component: StationeryFormComponent
	},
	{
		path: 'items',
		component: StationeryItemsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationeryRoutingModule { }
