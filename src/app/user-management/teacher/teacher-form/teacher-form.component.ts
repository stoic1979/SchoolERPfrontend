import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';
import { TeacherService } from '../../../core/services/user-management/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  public isRole: boolean = false;
 
  form: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(
  private fb: FormBuilder,
  private teacherService: TeacherService,
  private alertService: AlertService,
  private loadingService: LoadingService
  ) { }

  ngOnInit() {
  this.form = this.fb.group({
        name:  ['', Validators.required],
        designation:  ['', Validators.required],
        father_name:  ['', Validators.required],
        gender:   ['', Validators.required],
        email:  ['', Validators.required],

        dob:  ['', Validators.required],
        doj:  ['', Validators.required],
        age:   ['', Validators.required],
        tel_no:   ['', Validators.required],
        mob_no:   ['', Validators.required],
        aadhar_id:   ['', Validators.required],
        marital_status:   ['', Validators.required],
        address:   ['', Validators.required],
        education:   ['', Validators.required],
        work_exp:   ['', Validators.required],
        bank_name:   ['', Validators.required],
        bank_acc_no:   ['', Validators.required],
        password:   ['', Validators.required],
        });
  }

onSubmit() {
    console.log('onSubmit()');
    console.log('Teacher data '+this.form.value);
    this.loadingService.display(true);

    this.teacherService.add(this.form.value).subscribe((res)=> {

        this.loadingService.display(false);

        console.log('[TeacherFormComponent] Response =>' +JSON.stringify(res));
        this.formSubmitAttempt = true;
        this.alertService.success("Teacher added successfully");

      },(err) => {
            
            this.loadingService.display(false);

            const errBody = err.json();
            console.log('add Teacher  error: ', errBody);
            this.alertService.success("[TeacherFormComponent] failed to add teacher");
      });
    }
}