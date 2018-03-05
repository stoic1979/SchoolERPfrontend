import { Component, OnInit, ViewChild } from '@angular/core';

import { TeacherService } from '../../../core/services/user-management/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

 dataSource;

  constructor(
  private teacherService: TeacherService
  ) { 
  }

  ngOnInit() {

     this.teacherService.get().subscribe((res)=> {
        console.log('[Teacher List Component] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;
      },(err) => {
            const errBody = err.json();
            console.log('add student  error: ', errBody);
      });
  }

}


