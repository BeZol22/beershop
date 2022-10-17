import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileBottomComponent } from './product-tile-bottom.component';

describe('ProductTileBottomComponent', () => {
  let component: ProductTileBottomComponent;
  let fixture: ComponentFixture<ProductTileBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTileBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTileBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
