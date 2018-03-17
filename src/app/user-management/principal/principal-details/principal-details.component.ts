import { Component, OnInit } from '@angular/core';

import { PrincipalService } from '../../../core/services/user-management/principal.service';
import { AlertService } from '../../../core/services/utils/alert.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

import { TabManager } from '../../../core/helpers/tabManager';

@Component({
  selector: 'app-principal-details',
  templateUrl: './principal-details.component.html',
  styleUrls: ['./principal-details.component.css']
})
export class PrincipalDetailsComponent extends TabManager implements OnInit {

	dataSource: any;  

  constructor(
  	private principalService: PrincipalService,
    private alertService: AlertService,
    private loadingService: LoadingService
  	) { 
  		super();
  	}

  ngOnInit() {
  	// calling openTab from TabManager
     this.openTab('principal_tab');

     const id = localStorage.getItem('selected_prin_id');
     console.log('selected_prin_id in principal details' +id);
     this.loadingService.display(true);
     this.principalService.getById(id).subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[PrincipalDetailsComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;

        if(this.dataSource.length == 0) {
          this.alertService.info("No records found !!!");
        }

      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('[PrincipalDetailsComponent] Error  =>' +errBody);
      });
  }

}
