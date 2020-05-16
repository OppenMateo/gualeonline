import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const API_URL:string='https://api.gualeonline.com.ar/public';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  currentUser;
  comercioSeleccionado;
  listaSubCategorias;
  listaSubcategoriasProductos;
  listaSubcategoriasProductosAdmin = [];

  constructor(private http:HttpClient) { }

  guardarDatosComercio(datos)
  {
    return this.http.post(`${API_URL}/api/updateComercio`, datos);
  }

  guardarHorarios(datos)
  {
    return this.http.post(`${API_URL}/api/updateHorarios`, datos);
  }

  getComercioSeleccionado()
  {
    var id = 4;
    return this.http.get(`${API_URL}/api/getComercio/`+id);
  }

  getSubCategoriasComercios()
  {
    var id = 23;
    return this.http.get(`${API_URL}/api/getSubCategoriasComercios/`+id)
  }

}
