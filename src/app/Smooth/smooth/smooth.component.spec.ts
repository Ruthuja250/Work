import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothComponent } from './smooth.component';

describe('SmoothComponent', () => {
  let component: SmoothComponent;
  let fixture: ComponentFixture<SmoothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmoothComponent]
    });
    fixture = TestBed.createComponent(SmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
