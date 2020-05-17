import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { DatosLugarComponent } from './datos-lugar/datos-lugar.component';
import { ProductosComponent } from './productos/productos.component';
import { DisenioComponent } from './disenio/disenio.component';


const routes: Routes =
[
  {path: '', component: AdminIndexComponent, children:
  [
    {path: 'comercio', component: DatosLugarComponent},
    {path: 'Productos', component: ProductosComponent},
    {path: 'diseño', component: DisenioComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
