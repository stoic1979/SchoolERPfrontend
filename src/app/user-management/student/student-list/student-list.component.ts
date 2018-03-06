import { Component, OnInit, ViewChild } from '@angular/core';


import { StudentService } from '../../../core/services/user-management/student.service';
import { LoadingService } from '../../../core/services/utils/loading.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  
  dataSource;
  options;
  all;

  constructor(
  private studentService: StudentService,
  private loadingService: LoadingService
  ) { 
  }

  ngOnInit() {
     this.loadingService.display(true);
     this.studentService.get().subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[Student List Component] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;
      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('add student  error: ', errBody);
      });
  }

}

