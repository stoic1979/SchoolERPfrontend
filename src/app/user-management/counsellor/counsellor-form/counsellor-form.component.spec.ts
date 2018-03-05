import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorFormComponent } from './counsellor-form.component';

describe('CounsellorFormComponent', () => {
  let component: CounsellorFormComponent;
  let fixture: ComponentFixture<CounsellorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
