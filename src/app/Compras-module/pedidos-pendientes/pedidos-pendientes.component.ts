import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-pedidos-pendientes',
  templateUrl: './pedidos-pendientes.component.html',
  styleUrls: ['./pedidos-pendientes.component.css']
})
export class PedidosPendientesComponent implements OnInit {

  listaPedidosPendientes;

  constructor(private comprasService:ComprasService) { }

  ngOnInit() {
    // this.getPedidosPendientes();
  }

  // getPedidosPendientes()
  // {
  //   var lista;
  //   this.listaPedidosPendientes=[];
  //   this.comprasService.getPedidosPendientes().subscribe(
  //     res=>      
  //     {
  //       lista=res;
  //       lista.forEach(elem=>
  //       {
  //         this.listaPedidosPendientes.push(elem)
  //       });
  //       console.log(this.listaPedidosPendientes);        
  //     },
  //     err=>
  //     {
  //      console.log(err);
  //     }
  //   )
  // }

}
