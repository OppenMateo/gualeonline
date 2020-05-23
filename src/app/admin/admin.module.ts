import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatosLugarComponent } from './datos-lugar/datos-lugar.component';
import { ProductosComponent } from './productos/productos.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ColorSketchModule } from 'ngx-color/sketch';
import {MatMenuModule} from '@angular/material/menu';
import { DisenioComponent } from './disenio/disenio.component';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [AdminIndexComponent, NavbarComponent, DatosLugarComponent, ProductosComponent, DisenioComponent, CategoriasComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    ImageCropperModule,
    NgxFileDropModule,
    ColorSketchModule,
    MatMenuModule
  ]
})
export class AdminModule { }
