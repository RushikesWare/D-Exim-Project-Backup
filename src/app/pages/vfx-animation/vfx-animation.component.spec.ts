import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VFXAnimationComponent } from './vfx-animation.component';

describe('VFXAnimationComponent', () => {
  let component: VFXAnimationComponent;
  let fixture: ComponentFixture<VFXAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VFXAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VFXAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
