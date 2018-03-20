import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { TeacherService } from '../../../core/services/user-management/teacher.service';

import { TabManager } from '../../../core/helpers/tabManager';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent extends TabManager implements OnInit {

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(
  private fb: FormBuilder,
  private teacherService: TeacherService,
  private alertService: AlertService,
  private loadingService: LoadingService
  ) { 
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        father_name:  ['', Validators.required],
        gender:   ['', Validators.required],
        email:  ['', Validators.required],
        dob:  ['', Validators.required],
        doj:  ['', Validators.required],
        tel_no:   ['', Validators.required],
        mob_no:   ['', Validators.required],
        img:   ['', Validators.required],
        aadhar_id:   ['', Validators.required],
        marital_status:   ['', Validators.required],
        address:   ['', Validators.required],
        education:   ['', Validators.required],
        work_exp:   ['', Validators.required],
        bank_name:   ['', Validators.required],
        bank_acc_no:   ['', Validators.required],
        password:   ['', Validators.required],
      });

    // calling openTab from TabManager
    this.openTab('teacher_tab');
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

onSubmit() {
    console.log('onSubmit()');
    console.log(' onSubmit() teacher data '+JSON.stringify(this.form.value));

    if (this.form.valid) {
      this.loadingService.display(true);
      this.teacherService.add(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[TeacherFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.alertService.success("Teacher added successfully");
        },(err) => {
          this.loadingService.display(false);
          const errBody = err.json();
          console.log('[TeacherFormComponent] Error =>' +errBody);
          this.alertService.success("[TeacherFormComponent] failed to add teacher");
        });
      }
    else{
      console.log("form data is not valid");
    }
  }
}