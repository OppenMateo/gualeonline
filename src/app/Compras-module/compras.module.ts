import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras/compras.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes.component';
import { ModalLoginComponent } from 'src/app/modal-login/modal-login.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ComprasComponent, CategoriasComponent, NavbartopComponent, PedidosPendientesComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    MatMenuModule,
    MatDialogModule        
  ]
})
export class ComprasModule { }
