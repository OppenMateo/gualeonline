import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-modal-datos-compra',
  templateUrl: './modal-datos-compra.component.html',
  styleUrls: ['./modal-datos-compra.component.css']
})
export class ModalDatosCompraComponent implements OnInit {

  constructor(private comprasService: ComprasService) { }

  ngOnInit() {
  }

}
