import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { TransportManagerService } from '../../../core/services/user-management/transport-manager.service';

import { TabManager } from '../../../core/helpers/tabManager';

@Component({
  selector: 'app-transport-manager-form',
  templateUrl: './transport-manager-form.component.html',
  styleUrls: ['./transport-manager-form.component.css']
})
export class TransportManagerFormComponent extends TabManager implements OnInit {

  data: any;
  dataSource: any;

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private transportManagerService: TransportManagerService,
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
        img:   ['', Validators.required],
        mob_no:   ['', Validators.required],
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
    this.openTab('transport_tab');

    this.route.paramMap
    .filter(params => params.get('id') !== undefined && params.get('id') !== null)
    .switchMap((params: ParamMap) => this.transportManagerService.getById(params.get('id')))
    .subscribe((res)=> {
        this.loadingService.display(false);
        console.log('Edit [TransportManagerFormComponent] Response =>' +JSON.stringify(res));
        this.data = res.data;
        this.form.patchValue({_id:this.data._id});
        console.log('Edit [TransportManagerFormComponent] data  =>' +JSON.stringify(this.data)); 
            
        if(this.data.length == 0) {
           this.alertService.info("No records found !!!");
        }

    },(err) => {
          const errBody = err.json();
          console.log('Edit [TransportManagerFormComponent] Error  =>' +errBody);
    })
    }   

onSubmit() {
    console.log('onSubmit()');
    console.log(' onSubmit() transportmanager data '+JSON.stringify(this.form.value));

    if (this.form.valid) {
      this.loadingService.display(true);
      this.transportManagerService.add(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[TransportManagerFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.form.reset()
        this.alertService.success("Transport Manager added successfully");
        },(err) => {
          this.loadingService.display(false);
          const errBody = err.json();
          console.log('[TransportManagerFormComponent] Error =>' +errBody);
          this.alertService.success("[TransportManagerFormComponent] failed to add transport manager");
        });
      }
    else{
      console.log("form data is not valid");
    }
    }
}