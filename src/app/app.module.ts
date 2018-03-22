import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// components
import { HeaderComponent } from './ui-components/header/header.component';
import { SidebarComponent } from './ui-components/sidebar/sidebar.component';
import { FooterComponent } from './ui-components/footer/footer.component';
import { AlertComponent } from './ui-components/alert/alert.component';


// guards
import { AuthGuard } from './core/guards/auth.guard'

//services
import { AlertService } from './core/services/utils/alert.service';
import { LoadingService } from './core/services/utils/loading.service';

import { AuthService } from './core/services/auth/auth.service'
import { SectionService } from './core/services/system-management/section.service'
import { StandardService } from './core/services/system-management/standard.service'
import { StudentService } from './core/services/user-management/student.service'
import { TeacherService } from './core/services/user-management/teacher.service'
import { TransportManagerService } from './core/services/user-management/transport-manager.service'
import { FinanceManagerService } from './core/services/user-management/finance-manager.service'
import { PrincipalService } from './core/services/user-management/principal.service'
import { CounsellorService } from './core/services/user-management/counsellor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ AuthGuard, AlertService, LoadingService, AuthService, SectionService, StandardService, StudentService, TeacherService, TransportManagerService, FinanceManagerService, PrincipalService, CounsellorService],

  bootstrap: [AppComponent]
})
export class AppModule { }
