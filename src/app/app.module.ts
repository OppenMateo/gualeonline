import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalRegisterComponent } from './modal-register/modal-register.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../app/models/user'
import { FormNuevoComercioComponent } from './Compras-module/form-nuevo-comercio/form-nuevo-comercio.component';
import { ModalIniciarSesionComponent } from './modal-iniciar-sesion/modal-iniciar-sesion.component';
import { CategoriasAdminComponent } from './categorias-admin/categorias-admin.component';
import { NavbartopComponent } from './Compras-module/navbartop/navbartop.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [
    NavbartopComponent,
    AppComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    FormNuevoComercioComponent,
    ModalIniciarSesionComponent,
    CategoriasAdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule,
  ],
  entryComponents:  [ModalLoginComponent, ModalRegisterComponent, FormNuevoComercioComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
