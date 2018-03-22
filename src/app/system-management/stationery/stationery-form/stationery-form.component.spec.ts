import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryFormComponent } from './stationery-form.component';

describe('StationeryFormComponent', () => {
  let component: StationeryFormComponent;
  let fixture: ComponentFixture<StationeryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationeryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
