import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteligenciaDeNegociosComponent } from './inteligencia-de-negocios.component';

describe('InteligenciaDeNegocioComponent', () => {
  let component: InteligenciaDeNegociosComponent;
  let fixture: ComponentFixture<InteligenciaDeNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteligenciaDeNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteligenciaDeNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
