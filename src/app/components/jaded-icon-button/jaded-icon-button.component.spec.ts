import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadedIconButtonComponent } from './jaded-icon-button.component';

describe('JadedIconButtonComponent', () => {
  let component: JadedIconButtonComponent;
  let fixture: ComponentFixture<JadedIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadedIconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadedIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
