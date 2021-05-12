import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketLeadershipProductsComponent } from './market-leadership-products.component';

describe('MarketLeadershipProductsComponent', () => {
  let component: MarketLeadershipProductsComponent;
  let fixture: ComponentFixture<MarketLeadershipProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketLeadershipProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketLeadershipProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
