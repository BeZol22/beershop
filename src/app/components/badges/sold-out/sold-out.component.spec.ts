import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldOutComponent } from './sold-out.component';

describe('SoldOutComponent', () => {
  let component: SoldOutComponent;
  let fixture: ComponentFixture<SoldOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
