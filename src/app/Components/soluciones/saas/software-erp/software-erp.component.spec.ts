import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareErpComponent } from './software-erp.component';

describe('SoftwareErpComponent', () => {
  let component: SoftwareErpComponent;
  let fixture: ComponentFixture<SoftwareErpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareErpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
