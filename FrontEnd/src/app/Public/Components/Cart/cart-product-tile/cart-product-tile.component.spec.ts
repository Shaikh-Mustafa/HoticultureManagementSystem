import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductTileComponent } from './cart-product-tile.component';

describe('CartProductTileComponent', () => {
  let component: CartProductTileComponent;
  let fixture: ComponentFixture<CartProductTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProductTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
