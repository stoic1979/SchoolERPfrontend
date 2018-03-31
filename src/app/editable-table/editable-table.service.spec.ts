import { TestBed, inject } from '@angular/core/testing';

import { EditableTableService } from './editable-table.service';

describe('EditableTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditableTableService]
    });
  });

  it('should ...', inject([EditableTableService], (service: EditableTableService) => {
    expect(service).toBeTruthy();
  }));
});
