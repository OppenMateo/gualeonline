import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras/compras.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ComerciosComponent } from './comercios/comercios.component';
import { ModalAddProductoComponent } from './modal-add-producto/modal-add-producto.component';
import { ModalDatosCompraComponent } from './modal-datos-compra/modal-datos-compra.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [ComprasComponent, CategoriasComponent, PedidosPendientesComponent, ComerciosComponent, ModalAddProductoComponent, ModalDatosCompraComponent, CarritoComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    MatDialogModule   ,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalAddProductoComponent, ModalDatosCompraComponent],
})
export class ComprasModule { }
