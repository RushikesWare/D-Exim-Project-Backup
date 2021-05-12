import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMarchantExportersComponent } from './trade-marchant-exporters.component';

describe('TradeMarchantExportersComponent', () => {
  let component: TradeMarchantExportersComponent;
  let fixture: ComponentFixture<TradeMarchantExportersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeMarchantExportersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeMarchantExportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
