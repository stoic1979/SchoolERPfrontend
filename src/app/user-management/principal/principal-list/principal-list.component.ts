import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { PrincipalService } from '../../../core/services/user-management/principal.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-principal-list',
  templateUrl: './principal-list.component.html',
  styleUrls: ['./principal-list.component.css']
})

export class PrincipalListComponent implements OnInit {

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
    private principalService: PrincipalService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
     this.form = this.fb.group({
        name:  ['', Validators.required],
        email:  ['', Validators.required],
        aadhar_id:  ['', Validators.required],
      });

     this.getPrincipal();
  }

   getPrincipal() {
    this.loadingService.display(true);
     this.principalService.getPrincipal(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[PrincipalListComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[PrincipalListComponent] Error  =>' +errBody);
      });
  }

  onSubmit() {
    this.getPrincipal();
  }

  // get from top button "Get All Teachers"
  getAllPrincipal() {

    // clear table data
    this.dataSource = [];

    // close search box
    this.showSearch = false;

    // reset form
    this.form.reset();

    // fetch all teachers
    this.getPrincipal();
  }

  savePrincipalId(id){
    localStorage.setItem('selected_prin_id', id);
    console.log('selected principal id '+id);
  }

  
}
