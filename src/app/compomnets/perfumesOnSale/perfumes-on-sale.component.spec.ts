import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesOnSaleComponent } from './perfumes-on-sale.component';

describe('CardsComponent', () => {
  let component: PerfumesOnSaleComponent;
  let fixture: ComponentFixture<PerfumesOnSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfumesOnSaleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfumesOnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
