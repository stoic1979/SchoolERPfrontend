import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryListComponent } from './stationery-list.component';

describe('StationeryListComponent', () => {
  let component: StationeryListComponent;
  let fixture: ComponentFixture<StationeryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationeryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
