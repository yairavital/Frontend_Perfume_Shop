import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManPerfumesComponent } from './man-perfumes.component';

describe('ManPerfumesComponent', () => {
  let component: ManPerfumesComponent;
  let fixture: ComponentFixture<ManPerfumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManPerfumesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManPerfumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
