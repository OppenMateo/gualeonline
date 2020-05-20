import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  opcion = 1;

  constructor(public comprasService: ComprasService) { }

  ngOnInit(): void {

  }

  restarCantidad(producto){
    var detallePedido={
      id: producto.id_detalle
    }

    this.comprasService.restarDetallePedido(detallePedido).subscribe(res=>{
      this.comprasService.getPedidosPendientes();
    });
  }

  sumarCantidad(producto){
    var detallePedido={
      id: producto.id_detalle
    }

    this.comprasService.sumarDetallePedido(detallePedido).subscribe(res=>{
      this.comprasService.getPedidosPendientes();
    });
  }

}
