import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorListComponent } from './counsellor-list.component';

describe('CounsellorListComponent', () => {
  let component: CounsellorListComponent;
  let fixture: ComponentFixture<CounsellorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
