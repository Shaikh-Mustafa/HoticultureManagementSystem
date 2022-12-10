import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFarmsComponent } from './our-farms.component';

describe('OurFarmsComponent', () => {
  let component: OurFarmsComponent;
  let fixture: ComponentFixture<OurFarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFarmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
