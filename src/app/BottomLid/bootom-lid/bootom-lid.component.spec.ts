import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootomLidComponent } from './bootom-lid.component';

describe('BootomLidComponent', () => {
  let component: BootomLidComponent;
  let fixture: ComponentFixture<BootomLidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootomLidComponent]
    });
    fixture = TestBed.createComponent(BootomLidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
