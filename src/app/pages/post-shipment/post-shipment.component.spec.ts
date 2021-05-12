import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShipmentComponent } from './post-shipment.component';

describe('PostShipmentComponent', () => {
  let component: PostShipmentComponent;
  let fixture: ComponentFixture<PostShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
