import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloDeMercadosVerticalesComponent } from './desarrollo-de-mercados-verticales.component';

describe('DesarrolloDeMercadosVerticalesComponent', () => {
  let component: DesarrolloDeMercadosVerticalesComponent;
  let fixture: ComponentFixture<DesarrolloDeMercadosVerticalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloDeMercadosVerticalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloDeMercadosVerticalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
