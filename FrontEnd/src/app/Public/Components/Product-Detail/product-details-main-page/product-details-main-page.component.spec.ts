import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsMainPageComponent } from './product-details-main-page.component';

describe('ProductDetailsMainPageComponent', () => {
  let component: ProductDetailsMainPageComponent;
  let fixture: ComponentFixture<ProductDetailsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
