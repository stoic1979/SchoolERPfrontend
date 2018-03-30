import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { StationeryService } from '../../../core/services/system-management/stationery.service';

import { TabManager } from '../../../core/helpers/tabManager';

@Component({
  selector: 'app-stationery-form',
  templateUrl: './stationery-form.component.html',
  styleUrls: ['./stationery-form.component.css']
})
export class StationeryFormComponent extends TabManager implements OnInit {

	public isRole: boolean = false;
 
  	form: FormGroup;

  	private formSubmitAttempt: boolean;

  constructor(
  private fb: FormBuilder,
  private stationeryService: StationeryService,
  private alertService: AlertService,
  private loadingService: LoadingService
  	) { 
  		super();
  	}

  ngOnInit() {
  	this.form = this.fb.group({
      name: ['', Validators.required],
      standard: ['', Validators.required],
      section: ['', Validators.required],
      priority: ['', Validators.required],
  	  dos: ['', Validators.required],
  	});

  	//calling openTab from TabManager
  	this.openTab('stationery_tab');
  }

  isFieldInvalid(field: string) {
  	return(
  		(!this.form.get(field).valid && this.form.get(field).touched)  ||
  		(this.form.get(field).untouched && this.formSubmitAttempt)
  		);
  }

  onSubmit() {
  	console.log ('onSubmit()');
  	console.log ('onSubmit() stationery data '+JSON.stringify(this.form.value));

  	if (this.form.valid) {
  		this.loadingService.display(true);
  		this.stationeryService.add(this.form.value).subscribe((res)=> {
  			this.loadingService.display(false);
  			console.log('[StationeryFormComponent] Response =>' +JSON.stringify(res));
  			this.formSubmitAttempt = true;
  			this.alertService.success("Stationery added successfuly") 
  		},(err) => {
  			this.loadingService.display(false);
  			const errBody = err.json();
  			console.log('[StationeryFormComponent] Error =>' +errBody);
  			this.alertService.success("[StationeryFormComponent] failed to add stationery");
  		});
  	}
  	else{
  		console.log("form data is not valid");
  	}
  }

}
