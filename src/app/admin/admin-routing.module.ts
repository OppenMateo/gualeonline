import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { DatosLugarComponent } from './datos-lugar/datos-lugar.component';


const routes: Routes =
[
  {path: '', component: AdminIndexComponent, children:
  [
    {path: 'comercio', component: DatosLugarComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
