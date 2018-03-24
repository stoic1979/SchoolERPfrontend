import { Component, OnInit } from '@angular/core';

import { TransportManagerService } from '../../../core/services/user-management/transport-manager.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';

@Component({
  selector: 'app-transport-manager-details',
  templateUrl: './transport-manager-details.component.html',
  styleUrls: ['./transport-manager-details.component.css']
})
export class TransportManagerDetailsComponent  extends TabManager implements OnInit {

 dataSource: any;  

  constructor(
  	private transportManagerService: TransportManagerService,
    private alertService: AlertService,
    private loadingService: LoadingService
  	) {
  		 super();
  	 }

  ngOnInit() {
  	// calling openTab from TabManager
     this.openTab('personal_tab');

     const id = localStorage.getItem('selected_tran_id');
     console.log('selected_tran_id in  details' +id);
     this.loadingService.display(true);
     this.transportManagerService.getById(id).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[TransportManagerDetailsComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[TransportManagerDetailsComponent] Error  =>' +errBody);
      });
  }
}

