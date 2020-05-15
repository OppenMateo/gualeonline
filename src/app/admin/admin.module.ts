import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatosLugarComponent } from './datos-lugar/datos-lugar.component';
import { InformacionComponent } from './informacion/informacion.component';


@NgModule({
  declarations: [AdminIndexComponent, NavbarComponent, DatosLugarComponent, InformacionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
