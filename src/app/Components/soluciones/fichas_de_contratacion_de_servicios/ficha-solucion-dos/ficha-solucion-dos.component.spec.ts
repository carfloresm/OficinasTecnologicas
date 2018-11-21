import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaSolucionDosComponent } from './ficha-solucion-dos.component';

describe('FichaSolucionDosComponent', () => {
  let component: FichaSolucionDosComponent;
  let fixture: ComponentFixture<FichaSolucionDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaSolucionDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaSolucionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
