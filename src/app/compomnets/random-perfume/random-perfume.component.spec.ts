import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPerfumeComponent } from './random-perfume.component';

describe('RandomPerfumeComponent', () => {
  let component: RandomPerfumeComponent;
  let fixture: ComponentFixture<RandomPerfumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPerfumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPerfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
