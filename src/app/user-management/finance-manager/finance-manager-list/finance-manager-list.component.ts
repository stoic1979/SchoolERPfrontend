import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { FinanceManagerService } from '../../../core/services/user-management/finance-manager.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-finance-manager-list',
  templateUrl: './finance-manager-list.component.html',
  styleUrls: ['./finance-manager-list.component.css']
})

export class FinanceManagerListComponent implements OnInit {

  form: FormGroup;
  
  p: number = 1;
  dataSource: any[];
  
  showSearch:boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch
  }

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private financeManagerService: FinanceManagerService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        email:  ['', Validators.required],
    });

     this.getFinanceManagers();
  }

  getFinanceManagers() {
    this.loadingService.display(true);
     this.financeManagerService.getFinanceManagers(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        //console.log('[FinanceManagerListComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[FinanceManagerListComponent] Error  =>' +errBody);
      });
  }

  onSubmit() {
    this.getFinanceManagers();
  }

  // get from top button "Get All Students"
  getAllFinanceManagers() {

    // clear table data
    this.dataSource = [];

    // close search box
    this.showSearch = false;

    // reset form
    this.form.reset();

    // fetch all students
    this.getFinanceManagers();
  }

   saveFinanceManagerId(id){
    localStorage.setItem('selected_fnc_id', id);
    console.log('selected finance id '+id);
  }
}