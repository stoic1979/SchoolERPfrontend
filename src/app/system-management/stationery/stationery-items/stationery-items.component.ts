import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { StationeryService } from '../../../core/services/system-management/stationery.service';
import { EditableTableService } from '../../../editable-table/editable-table.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-stationery-items',
  templateUrl: './stationery-items.component.html',
  styleUrls: ['./stationery-items.component.css']
})
export class StationeryItemsComponent implements OnInit {

  tableHeaders = ['Stationery Name', 'Measure', 'Qty per packing unit', 'Priority', 'State'];

  tableRowsWithId: any[][] = [
    [1, 'Pencil', 'Unit', '1', 'High', true],
    [2, 'Sharpner', 'Unit', '1', 'High', true],
    [3, 'Notebooks', 'Unit', '1', 'High', true]
    ];

  dataType = ['string', 'string', 'string', 'string',  'boolean'];

  constructor(
  	private fb: FormBuilder,
    private alertService: AlertService,
    private stationeryService: StationeryService,
    private service: EditableTableService,
    private loadingService: LoadingService
  	) { }

  ngOnInit() {
    this.service.createTableWithIds(this.tableHeaders, this.tableRowsWithId, this.dataType);
  }


  onRemove(row: any) {
    console.log(row);
  }

}
