import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceFormComponent } from './attendance-form/attendance-form.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';

const routes: Routes = [
	{
		path: 'list',
		component: AttendanceListComponent
	},
	{
		path: 'add',
		component: AttendanceFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
