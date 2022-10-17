import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileMidComponent } from './product-tile-mid.component';

describe('ProductTileMidComponent', () => {
  let component: ProductTileMidComponent;
  let fixture: ComponentFixture<ProductTileMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTileMidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTileMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
