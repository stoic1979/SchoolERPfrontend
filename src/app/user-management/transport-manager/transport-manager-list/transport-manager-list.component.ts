import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { TransportManagerService } from '../../../core/services/user-management/transport-manager.service';
import { LoadingService } from '../../../core/services/utils/loading.service';


@Component({
  selector: 'app-transport-manager-list',
  templateUrl: './transport-manager-list.component.html',
  styleUrls: ['./transport-manager-list.component.css']
})
export class TransportManagerListComponent implements OnInit {

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
    private transportManagerService: TransportManagerService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
        name:  ['', Validators.required],
        email:  ['', Validators.required],
    });

     this.getTransportManagers();
  }

  getTransportManagers() {
    this.loadingService.display(true);
     this.transportManagerService.getTransportManagers(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        //console.log('[Transport List Component] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[Transport List Component] Error  =>' +errBody);
      });
  }

  onSubmit() {
    this.getTransportManagers();
  }

  // get from top button "Get All Students"
  getAllTransportManagers() {

    // clear table data
    this.dataSource = [];

    // close search box
    this.showSearch = false;

    // reset form
    this.form.reset();

    // fetch all students
    this.getTransportManagers();
  }

  saveTransportManagerId(id){
    localStorage.setItem('selected_tran_id', id);
    console.log('selected transport id '+id);
  }
}

