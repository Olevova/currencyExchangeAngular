import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcurrencyComponent } from './allcurrency.component';

describe('AllcurrencyComponent', () => {
  let component: AllcurrencyComponent;
  let fixture: ComponentFixture<AllcurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcurrencyComponent]
    });
    fixture = TestBed.createComponent(AllcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
