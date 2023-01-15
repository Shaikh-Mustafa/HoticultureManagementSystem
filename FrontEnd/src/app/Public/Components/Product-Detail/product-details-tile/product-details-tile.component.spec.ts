import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsTileComponent } from './product-details-tile.component';

describe('ProductDetailsTileComponent', () => {
  let component: ProductDetailsTileComponent;
  let fixture: ComponentFixture<ProductDetailsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
