import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceManagerListComponent } from './finance-manager-list.component';

describe('FinanceManagerListComponent', () => {
  let component: FinanceManagerListComponent;
  let fixture: ComponentFixture<FinanceManagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceManagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
