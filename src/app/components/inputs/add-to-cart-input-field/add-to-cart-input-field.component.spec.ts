import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartInputFieldComponent } from './add-to-cart-input-field.component';

describe('AddToCartInputFieldComponent', () => {
  let component: AddToCartInputFieldComponent;
  let fixture: ComponentFixture<AddToCartInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartInputFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCartInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
