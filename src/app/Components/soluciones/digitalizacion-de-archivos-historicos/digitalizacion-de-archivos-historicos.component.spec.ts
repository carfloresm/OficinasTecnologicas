import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalizacionDeArchivosHistoricosComponent } from './digitalizacion-de-archivos-historicos.component';

describe('DigitalizacionDeArchivosHistoricosComponent', () => {
  let component: DigitalizacionDeArchivosHistoricosComponent;
  let fixture: ComponentFixture<DigitalizacionDeArchivosHistoricosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalizacionDeArchivosHistoricosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalizacionDeArchivosHistoricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
