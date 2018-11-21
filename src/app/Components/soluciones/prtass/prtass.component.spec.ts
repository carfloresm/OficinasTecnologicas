import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrtassComponent } from './prtass.component';

describe('RrtassComponent', () => {
  let component: PrtassComponent;
  let fixture: ComponentFixture<PrtassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrtassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrtassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
