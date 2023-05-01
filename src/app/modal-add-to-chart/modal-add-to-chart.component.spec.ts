import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddToChartComponent } from './modal-add-to-chart.component';

describe('ModalAddToChartComponent', () => {
  let component: ModalAddToChartComponent;
  let fixture: ComponentFixture<ModalAddToChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddToChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddToChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
