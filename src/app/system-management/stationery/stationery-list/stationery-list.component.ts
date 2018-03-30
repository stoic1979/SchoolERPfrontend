import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { StationeryService } from '../../../core/services/system-management/stationery.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrls: ['./stationery-list.component.css']
})
export class StationeryListComponent implements OnInit {

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
    private stationeryService: StationeryService,
    private loadingService: LoadingService
  	) { }

  ngOnInit() {
  	this.form = this.fb.group({
  		name:  ['', Validators.required],
  		standard: ['', Validators.required],
      section: ['', Validators.required],
      priority: ['', Validators.required],
  		dos:  ['', Validators.required],
  	});

  	this.getStationery();
  }

  getStationery() {
  	 this.loadingService.display(true);
     this.stationeryService.getStationery(this.form.value).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[StationeryListComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[StationeryListComponent] Error  =>' +errBody);
      });
}

	onSubmit() {
    this.getStationery();
  }

  // get from top button "Get All Stationery"
  getAllStationery() {

    // clear table data
    this.dataSource = [];

    // close search box
    this.showSearch = false;

    // reset form
    this.form.reset();

    // fetch all stationery
    this.getStationery();
  }

  saveStationeryId(id){
    localStorage.setItem('selected_sta_id', id);
    console.log('selected stationery id '+id);
  }
}