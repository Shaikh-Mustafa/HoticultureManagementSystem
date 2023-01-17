import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductTileComponent } from './home-product-tile.component';

describe('HomeProductTileComponent', () => {
  let component: HomeProductTileComponent;
  let fixture: ComponentFixture<HomeProductTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
