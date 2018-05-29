import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { TeacherService } from '../../../core/services/user-management/teacher.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';
import Utils from '../../../core/helpers/utils';


@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent extends TabManager implements OnInit {

  data: any;
  dataSource: any;

  constructor(
    private teacherService: TeacherService,
    private alertService: AlertService,
    private loadingService: LoadingService
    ) {
      super();
     }

  ngOnInit() {

    // calling openTab from TabManager
     this.openTab('teacher_tab');

     const id = localStorage.getItem('selected_tech_id');
     console.log('selected_tech_id in teacher details' +id);
     this.loadingService.display(true);
     this.teacherService.getById(id).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[TeacherDetailsComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

        // date fixes for mongodb date, only keeping date, rejecting time
          this.dataSource.dob = Utils.dateOnlyStr(this.dataSource.dob);
          this.dataSource.doj = Utils.dateOnlyStr(this.dataSource.doj);

          console.log("[TeacherDetailsComponent] :: dob = " + this.dataSource.dob);
          console.log("[TeacherDetailsComponent] :: doj = " + this.dataSource.doj);


      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[TeacherDetailsComponent] Error  =>' +errBody);
    });
  }
}
