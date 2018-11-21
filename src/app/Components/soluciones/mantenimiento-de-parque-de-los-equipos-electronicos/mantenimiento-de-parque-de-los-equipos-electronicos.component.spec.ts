import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDeParqueDeLosEquiposElectronicosComponent } from './mantenimiento-de-parque-de-los-equipos-electronicos.component';

describe('MantenimientoDeParqueDeLosEquiposElectronicosComponent', () => {
  let component: MantenimientoDeParqueDeLosEquiposElectronicosComponent;
  let fixture: ComponentFixture<MantenimientoDeParqueDeLosEquiposElectronicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoDeParqueDeLosEquiposElectronicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoDeParqueDeLosEquiposElectronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
