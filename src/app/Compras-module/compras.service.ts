import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog';
import { FormNuevoComercioComponent } from '../Compras-module/form-nuevo-comercio/form-nuevo-comercio.component'

const API_URL:string='https://api.gualeonline.com.ar/public';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  httpOptions = 
  {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  comercioSeleccionado;
  
  constructor(private http:HttpClient, public dialog: MatDialog) { }

  getCategorias()
  {
    return this.http.get(`${API_URL}/api/getCategorias`);
  }

  getPedidosPendientes()
  {
    var id=42;
    return this.http.get(`${API_URL}/api/getPedidosPendientes/`+id);    
  }


  getSubcategoriasProductosComercio()
  {
    var id = 4;
    return this.http.get(`${API_URL}/api/getSubcatProductosComercio/`+id)
  }

  getComercioSeleccionado()
  {    
    var id = 4;
    return this.http.get(`${API_URL}/api/getComercio/`+id);
  }

  openModalNuevoComercio(): void
  {
      const dialogRef = this.dialog.open(FormNuevoComercioComponent, {
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(res=>{});
  }

  guardarComercio(datos)
  {
    return this.http.post(`${API_URL}/api/guardarComercio`, datos); 
  }
 

}


