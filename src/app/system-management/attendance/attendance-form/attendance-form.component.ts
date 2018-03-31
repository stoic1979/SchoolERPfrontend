import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/utils/alert.service';
import { AttendanceService } from '../../../core/services/system-management/attendance.service';
import { EditableTableService } from '../../../editable-table/editable-table.service';
import { LoadingService } from '../../../core/services/utils/loading.service';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent implements OnInit {

  tableHeaders = ['Student', '', '', '', 'State'];

  tableRowsWithId: any[][] = [
    [1, 'Header 1', 'Header 2', 'Header 3', 'Header 4', true],
    [2, 'Header 1', 'Header 2', 'Header 3', 'Header 4', true]
    ];

  dataType = ['string', 'string', 'string', 'string',  'boolean'];

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private attendanceService: AttendanceService,
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
