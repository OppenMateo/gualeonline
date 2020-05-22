import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  opcion = 1;
  loading = 0;

  constructor(public comprasService: ComprasService) { }

  ngOnInit(): void {

  }

  restarCantidad(producto){
    if (producto.cantidad > 1) {
      var detallePedido={
        id: producto.id_detalle
      }
      this.loading = 1;
      this.comprasService.restarDetallePedido(detallePedido).subscribe(res=>{
        this.loading = 0;
        this.comprasService.getPedidosPendientes();
      });
    }
  }

  sumarCantidad(producto){
    var detallePedido={
      id: producto.id_detalle
    }
    this.loading = 1;
    this.comprasService.sumarDetallePedido(detallePedido).subscribe(res=>{
      this.loading = 0;
      this.comprasService.getPedidosPendientes();
    });
  }

}
