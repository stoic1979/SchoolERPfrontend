import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceManagerFormComponent } from './finance-manager-form.component';

describe('FinanceManagerFormComponent', () => {
  let component: FinanceManagerFormComponent;
  let fixture: ComponentFixture<FinanceManagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceManagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceManagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
