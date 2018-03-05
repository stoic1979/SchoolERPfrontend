import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>; 
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  	this.isLoggedIn$ = this.authService.isLoggedIn; 
  }

  onLogout(){
    this.authService.logout();                      
  }

}
