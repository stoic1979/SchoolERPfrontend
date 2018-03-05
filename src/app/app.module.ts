import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HeaderComponent } from './ui-components/header/header.component';
import { SidebarComponent } from './ui-components/sidebar/sidebar.component';
import { FooterComponent } from './ui-components/footer/footer.component';

import { AuthGuard } from './core/guards/auth.guard'
import { AuthService } from './core/services/auth/auth.service'
import { SectionService } from './core/services/system-management/section.service'
import { StandardService } from './core/services/system-management/standard.service'
import { StudentService } from './core/services/user-management/student.service'
import { TeacherService } from './core/services/user-management/teacher.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ AuthGuard, AuthService, SectionService, StandardService, StudentService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
