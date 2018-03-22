import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../../core/services/user-management/student.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent  extends TabManager implements OnInit {

	public isRole: boolean = false;
 
  	form: FormGroup;

  	private formSubmitAttempt: boolean;

  	dataSource: any; 

  constructor(
  	private fb: FormBuilder,
    private studentService: StudentService,
    private alertService: AlertService,
    private loadingService: LoadingService
  	) { 
  	super(); 
  }

  ngOnInit() {
 	this.form = this.fb.group({
        name:  ['', Validators.required],
        gender: ['',Validators.required],
        lib_no:  ['', Validators.required],
        standard:  ['', Validators.required],
        section:  ['', Validators.required],
        dob:  ['', Validators.required],
        doj:  ['', Validators.required],
        previous_school:   ['', Validators.required],
        aadhar_id:   ['', Validators.required],
        img:   null,
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

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[StudentDetailsComponent] Error  =>' +errBody);
    });
   }

   isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('img').setValue({
          filename: file.name,
          filetype: file.type,
          // value: reader.result.split(',')[1]
        })
      };
    }
  }

  onSubmit() {
    console.log('onSubmit()');
    console.log('onSubmit() student data '+JSON.stringify(this.form.value));
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
}
