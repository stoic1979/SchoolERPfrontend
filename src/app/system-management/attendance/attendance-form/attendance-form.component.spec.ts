import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceFormComponent } from './attendance-form.component';

describe('AttendanceFormComponent', () => {
  let component: AttendanceFormComponent;
  let fixture: ComponentFixture<AttendanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
