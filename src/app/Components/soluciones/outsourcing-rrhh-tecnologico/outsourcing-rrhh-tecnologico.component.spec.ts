import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcingRrhhTecnologicoComponent } from './outsourcing-rrhh-tecnologico.component';

describe('OutsorsingRrhhTecnologicoComponent', () => {
  let component: OutsourcingRrhhTecnologicoComponent;
  let fixture: ComponentFixture<OutsourcingRrhhTecnologicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsourcingRrhhTecnologicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsourcingRrhhTecnologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
