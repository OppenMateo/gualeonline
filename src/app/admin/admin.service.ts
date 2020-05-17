import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

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

  constructor(private http:HttpClient, private authService:AuthService) 
  {
    this.authService.currentUser.subscribe(x=>this.currentUser = x);  
  }

  guardarDatosComercio(datos)
  {
    return this.http.post(`${API_URL}/api/updateComercio`, datos);
  }

  guardarHorarios(datos)
  {
    return this.http.post(`${API_URL}/api/updateHorarios`, datos);
  }

  getHorarios(){
    var id_comercio = 4;
    return this.http.get(`${API_URL}/api/getHorarios/`+id_comercio);
  }

  deleteHorariosComercio(id){
    return this.http.delete(`${API_URL}/api/deleteHorariosComercio/`+id);
  }

  deleteHorario(id){
    return this.http.delete(`${API_URL}/api/deleteHorario/`+id);
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

  getSubProdComercio()
  {
    var id = this.currentUser.usuario.id_comercio;
    return this.http.get(`${API_URL}/api/getSubcatProductosComercio/`+id)
  }

}
