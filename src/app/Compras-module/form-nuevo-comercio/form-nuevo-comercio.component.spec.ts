import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoComercioComponent } from './form-nuevo-comercio.component';

describe('FormNuevoComercioComponent', () => {
  let component: FormNuevoComercioComponent;
  let fixture: ComponentFixture<FormNuevoComercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNuevoComercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
