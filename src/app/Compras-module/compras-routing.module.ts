import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { ComerciosComponent } from './comercios/comercios.component';


const routes: Routes = 
[
  { path:'', component:ComprasComponent },
  { path:'Comercio', component:ComerciosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
