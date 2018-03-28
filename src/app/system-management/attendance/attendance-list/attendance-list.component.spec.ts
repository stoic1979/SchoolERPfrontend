import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceListComponent } from './attendance-list.component';

describe('AttendanceListComponent', () => {
  let component: AttendanceListComponent;
  let fixture: ComponentFixture<AttendanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
