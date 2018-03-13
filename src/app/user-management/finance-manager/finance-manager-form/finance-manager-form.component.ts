import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { FinanceManagerService } from '../../../core/services/user-management/finance-manager.service';

@Component({
  selector: 'app-finance-manager-form',
  templateUrl: './finance-manager-form.component.html',
  styleUrls: ['./finance-manager-form.component.css']
})

export class FinanceManagerFormComponent implements OnInit {

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private financeManagerService: FinanceManagerService,
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
        aadhar_id:  ['', Validators.required],
        domicile:  ['', Validators.required],
        marital_status:   ['', Validators.required],
        address:   ['', Validators.required],
       	education:   ['', Validators.required],
       	working_exp:   ['', Validators.required],
        bank_name:   ['', Validators.required],
        bank_acc_no:   ['', Validators.required],
        password:   ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('onSubmit()');
    console.log('finance data '+this.form.value);
    this.loadingService.display(true);

    this.financeManagerService.add(this.form.value).subscribe((res)=> {

        this.loadingService.display(false);

        console.log('[FinanceManagerFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.alertService.success("Finance Manager added successfully");

      },(err) => {
            
            this.loadingService.display(false);

            const errBody = err.json();
            console.log('add Finance Manager  error: ', errBody);
            this.alertService.success("[FinanceManagerFormComponent] failed to add finance manager");
      });
    }

}