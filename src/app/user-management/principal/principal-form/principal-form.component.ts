import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { PrincipalService } from '../../../core/services/user-management/principal.service';

@Component({
  selector: 'app-principal-form',
  templateUrl: './principal-form.component.html',
  styleUrls: ['./principal-form.component.css']
})
export class PrincipalFormComponent implements OnInit {
  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;	

  constructor(
  private fb: FormBuilder,
  private principalService: PrincipalService,
  private alertService: AlertService,
  private loadingService: LoadingService
  	) { }

  ngOnInit() {
  this.form = this.fb.group({
        name:  ['', Validators.required],
        designation:  ['', Validators.required],
        father_name:  ['', Validators.required],
        section:  ['', Validators.required],
        dob:  ['', Validators.required],
        doj:  ['', Validators.required],
        age:   ['', Validators.required],
        aadhar_id:   ['', Validators.required],
        domicile:  ['', Validators.required],
        marital_status:   ['', Validators.required],
        postal_address:   ['', Validators.required],
       	permanent_address:   ['', Validators.required],
       	education:   ['', Validators.required],
       	working_exp:   ['', Validators.required],
        bank_name:   ['', Validators.required],
        bank_acc_no:   ['', Validators.required],
        password:   ['', Validators.required],
        });
  }
  onSubmit() {
    console.log('onSubmit()');
    console.log('Principal data '+this.form.value);
    this.loadingService.display(true);

    this.principalService.add(this.form.value).subscribe((res)=> {

        this.loadingService.display(false);

        console.log('[PrincipalFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.alertService.success("Principal added successfully");

      },(err) => {
            
            this.loadingService.display(false);

            const errBody = err.json();
            console.log('add Principal  error: ', errBody);
            this.alertService.success("[PrincipalFormComponent] failed to add principal");
      });
    }
  

}