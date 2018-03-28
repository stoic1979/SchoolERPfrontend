import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { AttendanceService } from '../../../core/services/system-management/attendance.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

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
    private attendanceService: AttendanceService,
    private loadingService: LoadingService
  	) { }

  ngOnInit() {
  	this.form = this.fb.group({
        name:  ['', Validators.required],
        standard:  ['', Validators.required],
        section:  ['', Validators.required],
        status: ['', Validators.required],
        dos:  ['', Validators.required],
      });

     this.getAttendance();
  }

   getAttendance() {
    this.loadingService.display(true);
     this.attendanceService.getAttendance(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[AttendanceListComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[AttendanceListComponent] Error  =>' +errBody);
      });
  }

   onSubmit() {
    this.getAttendance();
  }

  // get from top button "Get All Attendance"
  getAllAttendance() {

    // clear table data
    this.dataSource = [];

    // close search box
    this.showSearch = false;

    // reset form
    this.form.reset();

    // fetch all attendance
    this.getAttendance();
  }

  saveStudentId(id){
    localStorage.setItem('selected_stu_id', id);
    console.log('selected student id '+id);
  }
}
