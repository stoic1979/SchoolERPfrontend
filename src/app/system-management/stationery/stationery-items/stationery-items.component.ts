import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { StationeryService } from '../../../core/services/system-management/stationery.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-stationery-items',
  templateUrl: './stationery-items.component.html',
  styleUrls: ['./stationery-items.component.css']
})
export class StationeryItemsComponent implements OnInit {

  constructor(
  	private fb: FormBuilder,
    private alertService: AlertService,
    private stationeryService: StationeryService,
    private loadingService: LoadingService
  	) { }

  ngOnInit() {
  }

}
