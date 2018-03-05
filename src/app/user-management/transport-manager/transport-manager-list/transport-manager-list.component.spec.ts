import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportManagerListComponent } from './transport-manager-list.component';

describe('TransportManagerListComponent', () => {
  let component: TransportManagerListComponent;
  let fixture: ComponentFixture<TransportManagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportManagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
