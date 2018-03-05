import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentComponent } from './search-student.component';

describe('SearchStudentComponent', () => {
  let component: SearchStudentComponent;
  let fixture: ComponentFixture<SearchStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
