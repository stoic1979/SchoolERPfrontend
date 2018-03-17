import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorDetailsComponent } from './counsellor-details.component';

describe('CounsellorDetailsComponent', () => {
  let component: CounsellorDetailsComponent;
  let fixture: ComponentFixture<CounsellorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
