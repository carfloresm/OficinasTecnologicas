import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionesDeNegociosComponent } from './aplicaciones-de-negocios.component';

describe('AplicacionesDeNegocioComponent', () => {
  let component: AplicacionesDeNegociosComponent;
  let fixture: ComponentFixture<AplicacionesDeNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionesDeNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionesDeNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
