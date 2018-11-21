import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionDeImpresorasComponent } from './administracion-de-impresoras.component';

describe('AdministracionDeImpresorasComponent', () => {
  let component: AdministracionDeImpresorasComponent;
  let fixture: ComponentFixture<AdministracionDeImpresorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionDeImpresorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionDeImpresorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
