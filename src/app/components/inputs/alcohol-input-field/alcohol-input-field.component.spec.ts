import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholInputFieldComponent } from './alcohol-input-field.component';

describe('AlcoholInputFieldComponent', () => {
  let component: AlcoholInputFieldComponent;
  let fixture: ComponentFixture<AlcoholInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholInputFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcoholInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
