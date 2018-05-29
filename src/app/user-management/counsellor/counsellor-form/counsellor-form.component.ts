import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { CounsellorService } from '../../../core/services/user-management/counsellor.service';

import { TabManager } from '../../../core/helpers/tabManager';

@Component({
  selector: 'app-counsellor-form',
  templateUrl: './counsellor-form.component.html',
  styleUrls: ['./counsellor-form.component.css']
})
export class CounsellorFormComponent extends TabManager implements OnInit {
  
  data: any;
  dataSource: any;

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;
  formData: FormData = new FormData();
 

  constructor(
  private fb: FormBuilder,
  private counsellorService: CounsellorService,
  private alertService: AlertService,
  private loadingService: LoadingService,
  private route: ActivatedRoute,
  private router: Router
  ) {
      super();
   }

  ngOnInit() {
  this.form = this.fb.group({
        name:  ['', Validators.required],
        father_name:  ['', Validators.required],
        gender:   ['', Validators.required],
        email:  ['', Validators.required],
        dob:  ['', Validators.required],
        doj:  ['', Validators.required],
        tel_no:   ['', Validators.required],
        mob_no:   ['', Validators.required],
        img:   ['', Validators.required],
        aadhar_id:   ['', Validators.required],
        marital_status:   ['', Validators.required],
        address:   ['', Validators.required],
         education:   ['', Validators.required],
         work_exp:   ['', Validators.required],
        bank_name:   ['', Validators.required],
        bank_acc_no:   ['', Validators.required],
        password:   ['', Validators.required],
        });

        // calling openTab from TabManager
    this.openTab('personal_tab');

    this.route.paramMap
    .filter(params => params.get('id') !== undefined && params.get('id') !== null)
    .switchMap((params: ParamMap) => this.counsellorService.getById(params.get('id')))
    .subscribe((res)=> {
        this.loadingService.display(false);
        console.log('Edit [CounsellorFormComponent] Response =>' +JSON.stringify(res));
        this.data = res.data;
        this.form.patchValue({_id:this.data._id});
        console.log('Edit [CounsellorFormComponent] data  =>' +JSON.stringify(this.data)); 
            
        if(this.data.length == 0) {
           this.alertService.info("No records found !!!");
        }

    },(err) => {
          const errBody = err.json();
          console.log('Edit [CounsellorFormComponent] Error  =>' +errBody);
    })
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

onSubmit() {
    console.log('onSubmit()');
    console.log(' onSubmit() counsellor data '+JSON.stringify(this.form.value));

    if (this.form.valid) {
      this.loadingService.display(true);
      this.counsellorService.add(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[CounsellorFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.form.reset()
        this.alertService.success("Counsellor added successfully");
        },(err) => {
          this.loadingService.display(false);
          const errBody = err.json();
          console.log('[CounsellorFormComponent] Error =>' +errBody);
          this.alertService.success("[CounsellorFormComponent] failed to add counsellor");
        });
      }
    else{
      console.log("form data is not valid");
    }
    }
}