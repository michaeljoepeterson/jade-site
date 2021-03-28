import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadedButtonComponent } from './jaded-button.component';

describe('JadedButtonComponent', () => {
  let component: JadedButtonComponent;
  let fixture: ComponentFixture<JadedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
