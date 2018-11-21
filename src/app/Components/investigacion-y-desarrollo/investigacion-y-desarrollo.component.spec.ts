import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionYDesarrolloComponent } from './investigacion-y-desarrollo.component';

describe('InvestigacionYDesarrolloComponent', () => {
  let component: InvestigacionYDesarrolloComponent;
  let fixture: ComponentFixture<InvestigacionYDesarrolloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigacionYDesarrolloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigacionYDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
