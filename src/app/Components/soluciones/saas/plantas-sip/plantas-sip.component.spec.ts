import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasSipComponent } from './plantas-sip.component';

describe('PlantasSipComponent', () => {
  let component: PlantasSipComponent;
  let fixture: ComponentFixture<PlantasSipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasSipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasSipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
