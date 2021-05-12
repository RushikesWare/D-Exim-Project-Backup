import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfExportHandleingComponent } from './type-of-export-handleing.component';

describe('TypeOfExportHandleingComponent', () => {
  let component: TypeOfExportHandleingComponent;
  let fixture: ComponentFixture<TypeOfExportHandleingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfExportHandleingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfExportHandleingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
