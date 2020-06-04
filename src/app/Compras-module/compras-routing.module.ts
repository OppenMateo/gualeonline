import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ModalDatosCompraComponent } from './modal-datos-compra/modal-datos-compra.component';
import { CarritoComponent } from './carrito/carrito.component';


const routes: Routes = 
[
  { path:'', component:ComprasComponent, children:
    [
    { path: '', component:CategoriasComponent },
      { path:'Comercio', component:ComerciosComponent },      
      { path: 'Categorias', component:CategoriasComponent },
      { path: 'datos_compra', component:ModalDatosCompraComponent },        
      { path: 'carro', component:CarritoComponent },
      { path: 'comercioTest', component:ComerciosComponent },
      { path: 'timbu.gchu', component:ComerciosComponent },
    ]  
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
