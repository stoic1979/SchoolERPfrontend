import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './core/services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	isLoggedIn$: Observable<boolean>;

  title = 'app';
  constructor(private authService: AuthService) { }


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

}
