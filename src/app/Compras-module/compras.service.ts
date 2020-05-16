import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog';

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
 

}


