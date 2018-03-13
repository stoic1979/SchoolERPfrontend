import { Component, OnInit, ViewChild } from '@angular/core';
import { PrincipalService } from '../../../core/services/user-management/principal.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-principal-list',
  templateUrl: './principal-list.component.html',
  styleUrls: ['./principal-list.component.css']
})

export class PrincipalListComponent implements OnInit {

  dataSource;

  constructor(
    private principalService: PrincipalService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
  this.loadingService.display(true);
     this.principalService.getPrincipal().subscribe((res)=> {
        this.loadingService.display(false);
        console.log('[Principal List Component] Response =>' +JSON.stringify(res));
        this.dataSource = res.data;
      },(err) => {
            this.loadingService.display(false);
            const errBody = err.json();
            console.log('add principal  error: ', errBody);
      });
  }

}
