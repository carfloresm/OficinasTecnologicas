import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatizacionDeMediosDigitalesComponent } from './automatizacion-de-medios-digitales.component';

describe('AutomatizacionDeMediosDigitalesComponent', () => {
  let component: AutomatizacionDeMediosDigitalesComponent;
  let fixture: ComponentFixture<AutomatizacionDeMediosDigitalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatizacionDeMediosDigitalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatizacionDeMediosDigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
