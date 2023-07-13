import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperLidComponent } from './upper-lid.component';

describe('UpperLidComponent', () => {
  let component: UpperLidComponent;
  let fixture: ComponentFixture<UpperLidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperLidComponent]
    });
    fixture = TestBed.createComponent(UpperLidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
