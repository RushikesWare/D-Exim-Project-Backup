import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportConsultancyComponent } from './export-consultancy.component';

describe('ExportConsultancyComponent', () => {
  let component: ExportConsultancyComponent;
  let fixture: ComponentFixture<ExportConsultancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportConsultancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
