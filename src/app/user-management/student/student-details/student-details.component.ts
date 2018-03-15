import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StudentService } from '../../../core/services/user-management/student.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent extends TabManager implements OnInit {

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(
  	private fb: FormBuilder,
    private studentService: StudentService,
    private alertService: AlertService,
    private loadingService: LoadingService
  	) {
  		super();
  	 }

  ngOnInit() {

  	// calling openTab from TabManager
     this.openTab('student_tab');
   }
  }

  

