import { Component, OnInit, ViewChild } from '@angular/core';

import { CounsellorService } from '../../../core/services/user-management/counsellor.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-counsellor-list',
  templateUrl: './counsellor-list.component.html',
  styleUrls: ['./counsellor-list.component.css']
})
export class CounsellorListComponent implements OnInit {
  
  dataSource;
  options;
  all;

  constructor(
  private counsellorService: CounsellorService,
  private loadingService: LoadingService
  	) { }

  ngOnInit() {
  	this.loadingService.display(true);
     this.counsellorService.get().subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[Counsellor List Component] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;
      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('add counsellor  error: ', errBody);
      });
  }

}