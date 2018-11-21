import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadElectronicaComponent } from './seguridad-electronica.component';

describe('SeguridadElectronicaComponent', () => {
  let component: SeguridadElectronicaComponent;
  let fixture: ComponentFixture<SeguridadElectronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadElectronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
