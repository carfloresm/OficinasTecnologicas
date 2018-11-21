import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrhhTecnologicoComponent } from './rrhh-tecnologico.component';

describe('RrhhTecnologicoComponent', () => {
  let component: RrhhTecnologicoComponent;
  let fixture: ComponentFixture<RrhhTecnologicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrhhTecnologicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrhhTecnologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
