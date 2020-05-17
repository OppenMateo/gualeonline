import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ModalDatosCompraComponent } from './modal-datos-compra/modal-datos-compra.component';


const routes: Routes = 
[
  { path:'', component:ComprasComponent, children:
    [
      { path: '', component:ComerciosComponent },
      { path:'Comercio', component:ComerciosComponent },
      { path: 'Categorias', component:CategoriasComponent },
      { path: 'datos_compra', component:ModalDatosCompraComponent },        
    ]  
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
