import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerfumeComponent } from './add-perfume.component';

describe('AddPerfumeComponent', () => {
  let component: AddPerfumeComponent;
  let fixture: ComponentFixture<AddPerfumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerfumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPerfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
