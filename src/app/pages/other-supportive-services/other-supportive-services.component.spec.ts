import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSupportiveServicesComponent } from './other-supportive-services.component';

describe('OtherSupportiveServicesComponent', () => {
  let component: OtherSupportiveServicesComponent;
  let fixture: ComponentFixture<OtherSupportiveServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSupportiveServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSupportiveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
