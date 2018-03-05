import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportManagerFormComponent } from './transport-manager-form.component';

describe('TransportManagerFormComponent', () => {
  let component: TransportManagerFormComponent;
  let fixture: ComponentFixture<TransportManagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportManagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportManagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
