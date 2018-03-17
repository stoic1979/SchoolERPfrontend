import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { CounsellorService } from '../../../core/services/user-management/counsellor.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-counsellor-list',
  templateUrl: './counsellor-list.component.html',
  styleUrls: ['./counsellor-list.component.css']
})

export class CounsellorListComponent implements OnInit {
  
  form: FormGroup;

  p: number = 1;
  dataSource: any[];

   private formSubmitAttempt: boolean;
  showSearch:boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch
  }

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private counsellorService: CounsellorService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        email:  ['', Validators.required],
        aadhar_id:  ['', Validators.required],
    });

     this.getCounsellors();
  }

  getCounsellors() {
    this.loadingService.display(true);
     this.counsellorService.getCounsellors(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        //console.log('[CounsellorListComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[CounsellorListComponent] Error  =>' +errBody);
      });
  }

  onSubmit() {
    this.getCounsellors();
  }

  // get from top button "Get All Students"
  getAllCounsellors() {

    // clear table data
    this.dataSource = [];

    // close search box
    this.showSearch = false;

    // reset form
    this.form.reset();

    // fetch all students
    this.getCounsellors();
  }

   saveCounsellorId(id){
    localStorage.setItem('selected_coun_id', id);
    console.log('selected counsellor id '+id);
  }
 
}

