import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryItemsComponent } from './stationery-items.component';

describe('StationeryItemsComponent', () => {
  let component: StationeryItemsComponent;
  let fixture: ComponentFixture<StationeryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationeryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
