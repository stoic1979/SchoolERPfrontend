import { Component, OnInit, ViewChild } from '@angular/core';


import { StudentService } from '../../../core/services/user-management/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  
  dataSource;
  options;

  constructor(
  private studentService: StudentService
  ) { 
  }

  ngOnInit() {

     this.studentService.get().subscribe((res)=> {
        console.log('[Student List Component] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;
      },(err) => {
            const errBody = err.json();
            console.log('add student  error: ', errBody);
      });
  }

}

