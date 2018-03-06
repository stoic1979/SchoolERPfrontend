import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AlertService } from '../../core/services/utils/alert.service';

import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 private loggedIn = new BehaviorSubject<boolean>(false);
 form: FormGroup;
 private formSubmitAttempt: boolean;

 loginErrors;
 errMsg;

  constructor(
  	 	private fb: FormBuilder,
  		private authService: AuthService,
      private alertService: AlertService
  	) { }
 
  
  ngOnInit() {
  	 this.form = this.fb.group({
        email:  ['', Validators.required],
        password:   ['', Validators.required],
    });
  }
  onSubmit() {
    console.log('onSubmit()');
      this.authService.login(this.form.value).subscribe((res)=> {
        console.log('[Login Component] Response =>' +JSON.stringify(res));
        console.log('[Login Componets] Token =>' +JSON.stringify(res.token));
        this.authService.saveToken(res.token);
        this.authService.loginDone();
        this.formSubmitAttempt = true;

      },(err) => {
            this.loginErrors = JSON.stringify(err.json());
            console.log('[LoginComponent] login  error: ', this.loginErrors);
            this.alertService.error("Login Failed");
            this.errMsg = "Login Failed !!!";
      });
    }
  get isLoggedIn() {
    	return this.loggedIn.asObservable();
  }
  
}