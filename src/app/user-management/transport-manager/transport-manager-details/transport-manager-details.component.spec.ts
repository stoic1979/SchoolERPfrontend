import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportManagerDetailsComponent } from './transport-manager-details.component';

describe('TransportManagerDetailsComponent', () => {
  let component: TransportManagerDetailsComponent;
  let fixture: ComponentFixture<TransportManagerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportManagerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
