import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { StudentService } from '../../../core/services/user-management/student.service';
import { LoadingService } from '../../../core/services/utils/loading.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  form: FormGroup;

  private formSubmitAttempt: boolean;
  dataSource;
  options;
  all;

  constructor(
  private fb: FormBuilder,
  private alertService: AlertService,
  private studentService: StudentService,
  private loadingService: LoadingService
  ) { 
  }

  ngOnInit() {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        roll_no:  ['', Validators.required],
        standard:  ['', Validators.required],
        section:  ['', Validators.required],
    });

     this.loadingService.display(true);
     this.studentService.search(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[Student List Component] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;
      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('add student  error: ', errBody);
      });
  }

  onSubmit() {
    console.log('onSubmit()');
    console.log('onSubmit() student data '+JSON.stringify(this.form.value));
  }
}

