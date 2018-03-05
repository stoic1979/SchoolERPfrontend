import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'student', 
    loadChildren: './student/student.module#StudentModule'
  },
  { 
    path: 'teacher', 
    loadChildren: './teacher/teacher.module#TeacherModule'
  },
  { 
    path: 'principal', 
    loadChildren: './principal/principal.module#PrincipalModule'
  },
  { 
    path: 'counsellor', 
    loadChildren: './counsellor/counsellor.module#CounsellorModule'
  },
  { 
    path: 'finance', 
    loadChildren: './finance-manager/finance-manager.module#FinanceManagerModule'
  },
  { 
    path: 'transport', 
    loadChildren: './transport-manager/transport-manager.module#TransportManagerModule'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }