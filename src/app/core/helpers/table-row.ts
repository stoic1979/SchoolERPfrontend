import { TableCell } from './table-cell';

export class TableRow {
    cells: TableCell[];
    id?: number;

    constructor(cells: TableCell[], id?: number) {
        this.cells = cells;
        this.id = id;
    }
}
