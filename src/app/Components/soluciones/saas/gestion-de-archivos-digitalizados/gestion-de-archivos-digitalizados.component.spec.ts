import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeArchivosDigitalizadosComponent } from './gestion-de-archivos-digitalizados.component';

describe('GestionDeArchivosDigitalizadosComponent', () => {
  let component: GestionDeArchivosDigitalizadosComponent;
  let fixture: ComponentFixture<GestionDeArchivosDigitalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDeArchivosDigitalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeArchivosDigitalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
