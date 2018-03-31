import { Injectable } from '@angular/core';

import { TableRow } from '../core/helpers/table-row';
import { TableCell } from '../core/helpers/table-cell';

@Injectable()
export class EditableTableService {

  tableHeadersObjects: TableCell[] = [];
  tableRowsObjects: TableRow[] = [];
  dataType = [];

  isEditing: TableRow[] = [];
  constructor() { }

  createTable(headers, content, dataType) {

    this.createHeaders(headers, dataType);

    let tableCells: TableCell[] = [];

    if (content.length > 0) {
      for (const row of content) {
        for (const cell of row) {
          tableCells.push(
            new TableCell(cell),
          );
        }
        this.tableRowsObjects.push(new TableRow(tableCells));
        tableCells = [];
      }
    }
  }

  createTableWithIds(headers, content, dataType) {

    this.createHeaders(headers, dataType);

    let tableCells: TableCell[] = [];

    if (content.length > 0) {
      for (const row of content) {
        for (let i = 1; i < row.length; i++) {
          tableCells.push(
            new TableCell(row[i]),
          );
        }
        this.tableRowsObjects.push(new TableRow(tableCells, row[0]));
        tableCells = [];
      }
    }
  }

  addRow() {
    const newCells: TableCell[] = [];
    let newRow: TableRow;
    for (let i = 0; i < this.tableHeadersObjects.length; i++) {
      switch (this.dataType[i]) {
        case 'boolean':
          newCells.push(new TableCell(false));
          break;
        default:
          newCells.push(new TableCell(''));
      }
    }
    this.tableRowsObjects.push(
      newRow = new TableRow(newCells, -1)
    );

    this.isEditing.push(newRow);
  }

  editRow(selectedRow: TableRow) {
    this.isEditing.push(selectedRow);
  }

  saveRow(selectedRow: TableRow) {
    this.isEditing = this.isEditing.filter(temporalRow => temporalRow !== selectedRow);
  }

  cancelEdition(selectedRow: TableRow) {
    this.tableRowsObjects = this.tableRowsObjects.filter(temporalRow => temporalRow !== selectedRow);
    this.isEditing = this.isEditing.filter(temporalRow => temporalRow !== selectedRow);
    for (const cell of selectedRow.cells) {
      if (cell.content == null || cell.content === '') {
        this.tableRowsObjects = this.tableRowsObjects.filter(err => err !== selectedRow);
      } else if (selectedRow.id === -1) {
        this.tableRowsObjects = this.tableRowsObjects.filter(err => err !== selectedRow);
      }
    }
  }

  deleteRow(selectedRow: TableRow) {
    this.isEditing = this.isEditing.filter(temporalRow => temporalRow !== selectedRow);
    this.tableRowsObjects = this.tableRowsObjects.filter(temporalRow => temporalRow !== selectedRow);
  }

  checkTypeOf(value: any): string {
    if (typeof (value) === 'boolean') {
      return 'boolean';
    }
    return '';
  }

  private createHeaders(headers, dataType) {
    for (const obj of headers) {
      this.tableHeadersObjects.push(
        new TableCell(obj)
      );

      this.dataType = dataType;
    }
  }
}
