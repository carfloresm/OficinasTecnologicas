import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaSolucionUnoComponent } from './ficha-solucion-uno.component';

describe('FichaSolucionUnoComponent', () => {
  let component: FichaSolucionUnoComponent;
  let fixture: ComponentFixture<FichaSolucionUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaSolucionUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaSolucionUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
