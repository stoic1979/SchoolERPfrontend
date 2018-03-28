import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

	{
		path: 'attendance',
		loadChildren: './attendance/attendance.module#AttendanceModule'
	},
	{
		path: 'stationery',
		loadChildren: './stationery/stationery.module#StationeryModule'
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManagementRoutingModule { }
