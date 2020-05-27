import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImgsProductoComponent } from './modal-imgs-producto.component';

describe('ModalImgsProductoComponent', () => {
  let component: ModalImgsProductoComponent;
  let fixture: ComponentFixture<ModalImgsProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalImgsProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImgsProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
