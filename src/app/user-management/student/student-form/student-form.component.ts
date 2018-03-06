import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StudentService } from '../../../core/services/user-management/student.service';
import { AlertService } from '../../../core/services/utils/alert.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(
  private fb: FormBuilder,
  private studentService: StudentService,
  private alertService: AlertService
  ) { }

  ngOnInit() {
  	 this.form = this.fb.group({
        name:  ['', Validators.required],
        lib_no:  ['', Validators.required],
        standard:  ['', Validators.required],
        section:  ['', Validators.required],
        dob:  ['', Validators.required],
        doj:  ['', Validators.required],
        tel_no:   ['', Validators.required],
        aadhar_id:   ['', Validators.required],
        father_name:  ['', Validators.required],
        mother_name:   ['', Validators.required],
        father_contact:   ['', Validators.required],
       	mother_contact:   ['', Validators.required],
       	mother_tel_no:   ['', Validators.required],
       	father_tel_no:   ['', Validators.required],
        father_email:   ['', Validators.required],
        mother_email:   ['', Validators.required],
        previous_school:   ['', Validators.required],
        password:   ['', Validators.required],
    });
   }
  onSubmit() {
    console.log('onSubmit()');
    this.studentService.add(this.form.value).subscribe((res)=> {
        console.log('[StudentFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.alertService.success("Student added successfully");

      },(err) => {
            const errBody = err.json();
            console.log('add student  error: ', errBody);
            this.alertService.success("[StudentFormComponent] failed to add student");
      });
    }
  

}