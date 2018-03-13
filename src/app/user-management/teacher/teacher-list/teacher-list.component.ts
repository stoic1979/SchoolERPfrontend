import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { TeacherService } from '../../../core/services/user-management/teacher.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  form: FormGroup;
  dataSource;

  showSearch:boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch
  }

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private teacherService: TeacherService,
    private loadingService: LoadingService
  ) { 
  }

  ngOnInit() {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        email:  ['', Validators.required],
    });

     this.getTeachers();
  }

  getTeachers() {
    this.loadingService.display(true);
     this.teacherService.getTeachers(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        //console.log('[TeacherListComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[TeacherListComponent] Error  =>' +errBody);
      });
  }

  onSubmit() {
    this.getTeachers();
  }

  // get from top button "Get All Students"
  getAllTeachers() {

    // clear table data
    this.dataSource = [];

    // close search box
    this.showSearch = false;

    // reset form
    this.form.reset();

    // fetch all students
    this.getTeachers();
  }
}

