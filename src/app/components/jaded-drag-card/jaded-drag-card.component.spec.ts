import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadedDragCardComponent } from './jaded-drag-card.component';

describe('JadedDragCardComponent', () => {
  let component: JadedDragCardComponent;
  let fixture: ComponentFixture<JadedDragCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JadedDragCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JadedDragCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
