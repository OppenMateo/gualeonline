import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatosCompraComponent } from './modal-datos-compra.component';

describe('ModalDatosCompraComponent', () => {
  let component: ModalDatosCompraComponent;
  let fixture: ComponentFixture<ModalDatosCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDatosCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDatosCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
