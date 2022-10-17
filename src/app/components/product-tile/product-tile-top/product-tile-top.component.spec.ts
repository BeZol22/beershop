import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileTopComponent } from './product-tile-top.component';

describe('ProductTileTopComponent', () => {
  let component: ProductTileTopComponent;
  let fixture: ComponentFixture<ProductTileTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTileTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTileTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
