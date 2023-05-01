import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerfumeComponent } from './edit-perfume.component';

describe('EditPerfumeComponent', () => {
  let component: EditPerfumeComponent;
  let fixture: ComponentFixture<EditPerfumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPerfumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPerfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
