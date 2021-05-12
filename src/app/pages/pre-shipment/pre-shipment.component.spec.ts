import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreShipmentComponent } from './pre-shipment.component';

describe('PreShipmentComponent', () => {
  let component: PreShipmentComponent;
  let fixture: ComponentFixture<PreShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
