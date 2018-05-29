import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { StudentService } from '../../../core/services/user-management/student.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';
import Utils from '../../../core/helpers/utils';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent extends TabManager implements OnInit {

  data: any;
  dataSource: any;

  constructor(
    private studentService: StudentService,
    private alertService: AlertService,
    private loadingService: LoadingService
  	) {
  		super();
  	 }

  ngOnInit() {

  	// calling openTab from TabManager
     this.openTab('student_tab');

     const id = localStorage.getItem('selected_stu_id');
     console.log('selected_stu_id in student details' +id);
     this.loadingService.display(true);
     this.studentService.getById(id).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[StudentDetailsComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

       if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

        // date fixes for mongodb date, only keeping date, rejecting time
          this.dataSource.dob = Utils.dateOnlyStr(this.dataSource.dob);
          this.dataSource.doj = Utils.dateOnlyStr(this.dataSource.doj);

          console.log("[StudentDetailsComponent] :: dob = " + this.dataSource.dob);
          console.log("[StudentDetailsComponent] :: doj = " + this.dataSource.doj);

        
      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[StudentDetailsComponent] Error  =>' +errBody);
    });
  }
}
