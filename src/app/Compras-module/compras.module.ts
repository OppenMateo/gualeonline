import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras/compras.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ComerciosComponent } from './comercios/comercios.component';
import { ModalAddProductoComponent } from './modal-add-producto/modal-add-producto.component';



@NgModule({
  declarations: [ComprasComponent, CategoriasComponent, NavbartopComponent, PedidosPendientesComponent, ComerciosComponent, ModalAddProductoComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    MatMenuModule,
    MatDialogModule        
  ],
  entryComponents: [ModalAddProductoComponent],
})
export class ComprasModule { }
