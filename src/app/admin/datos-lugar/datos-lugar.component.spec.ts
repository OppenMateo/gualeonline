import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosLugarComponent } from './datos-lugar.component';

describe('DatosLugarComponent', () => {
  let component: DatosLugarComponent;
  let fixture: ComponentFixture<DatosLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
