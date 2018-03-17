import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDetailsComponent } from './principal-details.component';

describe('PrincipalDetailsComponent', () => {
  let component: PrincipalDetailsComponent;
  let fixture: ComponentFixture<PrincipalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
