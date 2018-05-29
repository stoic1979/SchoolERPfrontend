import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Router} from "@angular/router";

import { AlertService } from '../../core/services/utils/alert.service';

import { AuthService } from '../../core/services/auth/auth.service';

import { LoadingService } from '../../core/services/utils/loading.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 private loggedIn = new BehaviorSubject<boolean>(false);
 form: FormGroup;
 private formSubmitAttempt: boolean;
 loginError;
 loginErrors;
 errMsg;
  
  constructor(
  	 	private fb: FormBuilder,
  		private authService: AuthService,
      private alertService: AlertService,
      private loadingService: LoadingService,
      private router: Router,
  	) { 
    // check user is already logged in
    if(authService.getToken().length > 0) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  	 this.form = this.fb.group({
        email:  ['', Validators.required],
        password:   ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('onSubmit()');
    if (this.form.valid) {
      this.loadingService.display(true);

      this.authService.login(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[Login Component] Response =>' +JSON.stringify(res));
        console.log('[Login Component] Token =>' +JSON.stringify(res.token));
      
        this.authService.saveToken(res.token);
        this.authService.saveUser(res.name, res.superAdminId, res.role);
        
        
        this.authService.loginDone();
        this.formSubmitAttempt = true;
      },(err) => {
            this.loadingService.display(false); 
            this.loginError = "Login Failed !!!" 
            document.getElementById("linkmodal").click();
            this.loginErrors = JSON.stringify(err.json());
            console.log('[LoginComponent] login  error: ', this.loginErrors);
      });
    }
    else{
      if(!this.form.controls['email'].value && !this.form.controls['password'].value){
        console.log("email " +this.form.controls['email'].value);
        this.loginError = "Please Enter Your Email Id and Password"
        document.getElementById("linkmodal").click();
      }
      else if(!this.form.controls['email'].value){
        console.log("email " +this.form.controls['email'].value);
        this.loginError = "Please Enter Your Email Id"
        document.getElementById("linkmodal").click();
      }
      else if(!this.form.controls['password'].value){
        console.log("email " +this.form.controls['password'].value);
        this.loginError = "Please Enter Your Password"
        document.getElementById("linkmodal").click();
      }
    }  
  }
  get isLoggedIn() {
    	return this.loggedIn.asObservable();
  }  
}