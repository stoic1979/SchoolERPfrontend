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

  p: number = 1;
  dataSource: any[];

  private formSubmitAttempt: boolean;
  showSearch:boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch
  }

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private studentService: StudentService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        lib_no:  ['', Validators.required],
        standard:  ['', Validators.required],
       
    });

     this.getStudents();
  }

  getStudents() {
    this.loadingService.display(true);
     this.studentService.getStudents(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        //console.log('[Student List Component] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[Student List Component] Error  =>' +errBody);
      });
  }

  onSubmit() {
    this.getStudents();
  }

  // get from top button "Get All Students"
  getAllStudents() {

    // clear table data
    this.dataSource = [];

    // close search box
    this.showSearch = false;

    // reset form
    this.form.reset();

    // fetch all students
    this.getStudents();
  }
}

