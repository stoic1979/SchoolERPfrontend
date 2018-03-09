import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { TransportManagerService } from '../../../core/services/user-management/transport-manager.service';

@Component({
  selector: 'app-transport-manager-form',
  templateUrl: './transport-manager-form.component.html',
  styleUrls: ['./transport-manager-form.component.css']
})
export class TransportManagerFormComponent implements OnInit {

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(
  private fb: FormBuilder,
  private transportManagerService: TransportManagerService,
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
    console.log('transport data '+this.form.value);
    this.loadingService.display(true);

    this.transportManagerService.add(this.form.value).subscribe((res)=> {

        this.loadingService.display(false);

        console.log('[TransportManagerFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.alertService.success("Transport Manager added successfully");

      },(err) => {
            
            this.loadingService.display(false);

            const errBody = err.json();
            console.log('add Transport Manager  error: ', errBody);
            this.alertService.success("[TransportManagerFormComponent] failed to add transport manager");
      });
    }
  

}
