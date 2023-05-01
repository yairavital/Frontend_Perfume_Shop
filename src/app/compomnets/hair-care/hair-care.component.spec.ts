import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairCareComponent } from './hair-care.component';

describe('HairCairComponent', () => {
  let component: HairCareComponent;
  let fixture: ComponentFixture<HairCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HairCareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HairCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
