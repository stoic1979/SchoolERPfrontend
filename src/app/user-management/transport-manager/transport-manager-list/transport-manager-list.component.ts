import { Component, OnInit } from '@angular/core';

import { TransportManagerService } from '../../../core/services/user-management/transport-manager.service';
import { LoadingService } from '../../../core/services/utils/loading.service';


@Component({
  selector: 'app-transport-manager-list',
  templateUrl: './transport-manager-list.component.html',
  styleUrls: ['./transport-manager-list.component.css']
})
export class TransportManagerListComponent implements OnInit {

  dataSource;
  options;
  all;


  constructor(
  private transportManagerService: TransportManagerService,
  private loadingService: LoadingService
  ) { }

  ngOnInit() {
  this.loadingService.display(true);
     this.transportManagerService.get().subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[TransportManagerListComponent] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;
      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('add transportmanager  error: ', errBody);
      });
  }

}