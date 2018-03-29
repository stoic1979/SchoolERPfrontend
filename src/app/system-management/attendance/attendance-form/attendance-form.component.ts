import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { AttendanceService } from '../../../core/services/system-management/attendance.service';

import { TabManager } from '../../../core/helpers/tabManager';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent extends TabManager implements OnInit {

	public isRole: boolean = false;
 
  	form: FormGroup;

  	private formSubmitAttempt: boolean;

  constructor(
  private fb: FormBuilder,
  private attendanceService: AttendanceService,
  private alertService: AlertService,
  private loadingService: LoadingService
  	) { 
  		super();
  	}

  ngOnInit() {
  	this.form = this.fb.group({
      name: ['', Validators.required],
      lib_no: ['', Validators.required],
  		standard: ['', Validators.required],
  		section: ['', Validators.required],
      status: ['', Validators.required],
  		dos: ['', Validators.required],
  	});

  	//calling openTab from TabManager
  	this.openTab('attendance_tab');
  }

  isFieldInvalid(field: string) {
  	return(
  		(!this.form.get(field).valid && this.form.get(field).touched)  ||
  		(this.form.get(field).untouched && this.formSubmitAttempt)
  		);
  }

  onSubmit() {
  	console.log ('onSubmit()');
  	console.log ('onSubmit() attandance data '+JSON.stringify(this.form.value));

  	if (this.form.valid) {
  		this.loadingService.display(true);
  		this.attendanceService.add(this.form.value).subscribe((res)=> {
  			this.loadingService.display(false);
  			console.log('[AttendanceFormComponent] Response =>' +JSON.stringify(res));
  			this.formSubmitAttempt = true;
  			this.alertService.success("Attendance added successfuly") 
  		},(err) => {
  			this.loadingService.display(false);
  			const errBody = err.json();
  			console.log('[AttendanceFormComponent] Error =>' +errBody);
  			this.alertService.success("[AttendanceFormComponent] failed to add attendance");
  		});
  	}
  	else{
  		console.log("form data is not valid");
  	}
  }

}
