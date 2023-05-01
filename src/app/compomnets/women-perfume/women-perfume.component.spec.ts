import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenPerfumeComponent } from './women-perfume.component';

describe('WomenPerfumeComponent', () => {
  let component: WomenPerfumeComponent;
  let fixture: ComponentFixture<WomenPerfumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenPerfumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenPerfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
