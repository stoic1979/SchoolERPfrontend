import { Component, OnInit } from '@angular/core';

import { FinanceManagerService } from '../../../core/services/user-management/finance-manager.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-finance-manager-list',
  templateUrl: './finance-manager-list.component.html',
  styleUrls: ['./finance-manager-list.component.css']
})
export class FinanceManagerListComponent implements OnInit {

  dataSource;
  options;
  all;


  constructor(
  private financeManagerService: FinanceManagerService,
  private loadingService: LoadingService
  ) { }

  ngOnInit() {
  this.loadingService.display(true);
     this.financeManagerService.get().subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[FinanceManagerListComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;
      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('add financemanager  error: ', errBody);
      });
  }

}