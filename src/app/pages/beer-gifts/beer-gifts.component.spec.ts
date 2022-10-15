import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerGiftsComponent } from './beer-gifts.component';

describe('BeerGiftsComponent', () => {
  let component: BeerGiftsComponent;
  let fixture: ComponentFixture<BeerGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerGiftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
