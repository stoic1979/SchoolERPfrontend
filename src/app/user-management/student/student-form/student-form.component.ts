import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { StudentService } from '../../../core/services/user-management/student.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent extends TabManager implements OnInit {

  data: any;

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   super(); 
  }

  ngOnInit() {
     this.form = this.fb.group({
         _id: [''],
        name:  ['', Validators.required],
        gender: ['',Validators.required],
        lib_no:  ['', Validators.required],
        standard:  ['', Validators.required],
        section:  ['', Validators.required],
        dob:  ['', Validators.required],
        doj:  ['', Validators.required],
        previous_school:   ['', Validators.required],
        aadhar_id:   ['', Validators.required],
        // img:   ['', Validators.required],
        father_name:  ['', Validators.required],
        mother_name:   ['', Validators.required],
        father_mob_no:   ['', Validators.required],
        mother_mob_no:   ['', Validators.required],
        mother_tel_no:   ['', Validators.required],
        father_tel_no:   ['', Validators.required],
        father_email:   ['', Validators.required],
        mother_email:   ['', Validators.required],
        password:   ['', Validators.required],
    });

     // calling openTab from TabManager
    this.openTab('student_tab');

    this.route.paramMap
    .filter(params => params.get('id') !== undefined && params.get('id') !== null)
    .switchMap((params: ParamMap) => this.studentService.getById(params.get('id')))
    .subscribe((res)=> {
        this.loadingService.display(false);
        console.log('Edit [StudentFormComponent] Response =>' +JSON.stringify(res));
        this.data = res.data;
        this.form.patchValue({_id:this.data._id});
        console.log('Edit [StudentFormComponent] data  =>' +JSON.stringify(this.data)); 
            
        if(this.data.length == 0) {
           this.alertService.info("No records found !!!");
        }

    },(err) => {
          const errBody = err.json();
          console.log('Edit [StudentFormComponent] Error  =>' +errBody);
    })
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    console.log('onSubmit()');
    console.log('onSubmit() student data '+JSON.stringify(this.form.value));

    if (this.form.valid) {
      this.loadingService.display(true);
      this.studentService.add(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[StudentFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.alertService.success("Student added successfully");
        },(err) => {
          this.loadingService.display(false);
          const errBody = err.json();
          console.log('[StudentFormComponent] Error =>' +errBody);
          this.alertService.success("[StudentFormComponent] failed to add student");
        });
      }
    else{
      console.log("form data is not valid");
    }
  }
}