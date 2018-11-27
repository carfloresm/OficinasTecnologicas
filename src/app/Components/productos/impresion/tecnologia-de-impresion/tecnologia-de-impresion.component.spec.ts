import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaDeImpresionComponent } from './tecnologia-de-impresion.component';

describe('TecnologiaDeImpresionComponent', () => {
  let component: TecnologiaDeImpresionComponent;
  let fixture: ComponentFixture<TecnologiaDeImpresionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiaDeImpresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaDeImpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
