import { Component, OnInit } from '@angular/core';

import { FinanceManagerService } from '../../../core/services/user-management/finance-manager.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';
import Utils from '../../../core/helpers/utils';


@Component({
  selector: 'app-finance-manager-details',
  templateUrl: './finance-manager-details.component.html',
  styleUrls: ['./finance-manager-details.component.css']
})
export class FinanceManagerDetailsComponent extends TabManager implements OnInit {

	dataSource: any;  

  constructor(
  	private financeManagerService: FinanceManagerService,
    private alertService: AlertService,
    private loadingService: LoadingService
  	) {
  		 super();
  	 }

  ngOnInit() {
  	// calling openTab from TabManager
     this.openTab('personal_tab');

     const id = localStorage.getItem('selected_fnc_id');
     console.log('selected_fnc_id in  details' +id);
     this.loadingService.display(true);
     this.financeManagerService.getById(id).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[FinanceManagerDetailsComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }


        // date fixes for mongodb date, only keeping date, rejecting time
          this.dataSource.dob = Utils.dateOnlyStr(this.dataSource.dob);
          this.dataSource.doj = Utils.dateOnlyStr(this.dataSource.doj);

          console.log("[FinanceManagerDetailsComponent] :: dob = " + this.dataSource.dob);
          console.log("[FinanceManagerDetailsComponent] :: doj = " + this.dataSource.doj);


      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[FinanceManagerDetailsComponent] Error  =>' +errBody);
      });
  }
}
