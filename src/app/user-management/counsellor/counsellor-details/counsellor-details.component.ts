import { Component, OnInit } from '@angular/core';

import { CounsellorService } from '../../../core/services/user-management/counsellor.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';
import Utils from '../../../core/helpers/utils';

@Component({
  selector: 'app-counsellor-details',
  templateUrl: './counsellor-details.component.html',
  styleUrls: ['./counsellor-details.component.css']
})
export class CounsellorDetailsComponent extends TabManager implements OnInit {

  dataSource: any;  
  
  constructor(
  	private counsellorService: CounsellorService,
    private alertService: AlertService,
    private loadingService: LoadingService
  	) {
  		super();	
  	 }

    ngOnInit() {
  	 // calling openTab from TabManager
     	this.openTab('counsellor_tab');

     	const id = localStorage.getItem('selected_coun_id');
     	console.log('selected_coun_id in counsellor details' +id);
     	this.loadingService.display(true);
     	this.counsellorService.getById(id).subscribe((res)=> {
        	this.loadingService.display(false);
        	console.log('[CounsellorDetailsComponent] Response =>' +JSON.stringify(res));
        	this.dataSource = res.data;

        	if(this.dataSource.length == 0) {
         	 this.alertService.info("No records found !!!");
        	}

           // date fixes for mongodb date, only keeping date, rejecting time
          this.dataSource.dob = Utils.dateOnlyStr(this.dataSource.dob);
          this.dataSource.doj = Utils.dateOnlyStr(this.dataSource.doj);

          console.log("[CounsellorDetailsComponent] :: dob = " + this.dataSource.dob);
          console.log("[CounsellorDetailsComponent] :: doj = " + this.dataSource.doj);

     	 },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[CounsellorDetailsComponent] Error  =>' +errBody);
      	});
    } 
}
