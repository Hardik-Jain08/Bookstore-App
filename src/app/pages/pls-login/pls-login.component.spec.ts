import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlsLoginComponent } from './pls-login.component';

describe('PlsLoginComponent', () => {
  let component: PlsLoginComponent;
  let fixture: ComponentFixture<PlsLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlsLoginComponent]
    });
    fixture = TestBed.createComponent(PlsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
