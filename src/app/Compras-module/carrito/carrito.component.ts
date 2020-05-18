import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private comprasService: ComprasService) { }

  ngOnInit(): void {
}

}
