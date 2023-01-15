import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductCategoriesComponent } from './home-product-categories.component';

describe('HomeProductCategoriesComponent', () => {
  let component: HomeProductCategoriesComponent;
  let fixture: ComponentFixture<HomeProductCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
