import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditOfCooperativeComponent } from './audit-of-cooperative.component';

describe('AuditOfCooperativeComponent', () => {
  let component: AuditOfCooperativeComponent;
  let fixture: ComponentFixture<AuditOfCooperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditOfCooperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditOfCooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
