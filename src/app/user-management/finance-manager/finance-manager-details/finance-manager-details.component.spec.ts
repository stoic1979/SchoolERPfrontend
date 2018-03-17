import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceManagerDetailsComponent } from './finance-manager-details.component';

describe('FinanceManagerDetailsComponent', () => {
  let component: FinanceManagerDetailsComponent;
  let fixture: ComponentFixture<FinanceManagerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceManagerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
