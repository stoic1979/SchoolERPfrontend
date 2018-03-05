import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalFormComponent } from './principal-form.component';

describe('PrincipalFormComponent', () => {
  let component: PrincipalFormComponent;
  let fixture: ComponentFixture<PrincipalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
