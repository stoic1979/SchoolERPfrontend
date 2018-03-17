import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetailsComponent } from './teacher-details.component';

describe('TeacherDetailsComponent', () => {
  let component: TeacherDetailsComponent;
  let fixture: ComponentFixture<TeacherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
