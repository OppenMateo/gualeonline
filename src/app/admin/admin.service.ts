import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalImgsProductoComponent } from './modal-imgs-producto/modal-imgs-producto.component';

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
  prod;
  imagenProd = [];

  constructor(private http:HttpClient, private authService:AuthService, public dialog: MatDialog)
  {
    this.authService.currentUser.subscribe(x=>this.currentUser = x);
  }



  //  COMERCIO //

  getComercioSeleccionado()
  {
    var id = this.currentUser.usuario.id_comercio;
    return this.http.get(`${API_URL}/api/getComercio/`+id);
  }

  guardarDatosComercio(datos)
  {
    return this.http.post(`${API_URL}/api/updateComercio`, datos);
  }

  guardarImagenesComercio(datos){
    return this.http.post(`${API_URL}/api/updateImagenesComercio`, datos);
  }

  // HORARIOS //

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

  //CATEGORIAS Y SUBCATEGORIAS //

  getCategoriasProducto()
  {
    return this.http.get(`${API_URL}/api/getSubCategoriasProductos/`+this.comercioSeleccionado[0].id)
  }

  guardarCategoriaProducto(catprod){
    return this.http.post(`${API_URL}/api/guardarSubcatProducto`, catprod);
  }

  editarCategoriaProducto(catprod){
    return this.http.post(`${API_URL}/api/editarSubcatProducto`, catprod);
  }

  eliminarCategoriaProducto(catprod){
    return this.http.post(`${API_URL}/api/borrarSubCatProd`, catprod);
  }

  getSubCategoriasComercios()
  {
    var id = 23;
    return this.http.get(`${API_URL}/api/getSubCategoriasComercios/`+id)
  }

  //  PRODUCTOS //

  getSubProdComercio()
  {
    var id = this.currentUser.usuario.id_comercio;
    return this.http.get(`${API_URL}/api/getSubcatProductosComercio/`+id)
  }

  getSubProdImgsComercio()
  {
    var id = this.currentUser.usuario.id_comercio;
    return this.http.get(`${API_URL}/api/getSubcategoriasProductosImgsComercio/`+id)
  }

  guardarProducto(prod){
    return this.http.post(`${API_URL}/api/guardarProducto`, prod);
  }

  editarProducto(prod){
    return this.http.post(`${API_URL}/api/updateProducto`, prod);
  }

  eliminarProducto(id)
  {
    return this.http.delete(`${API_URL}/api/borrarProducto/`+id);
  }

  eliminarImgsProducto(id){
    return this.http.delete(`${API_URL}/api/borrarImgsProducto/`+id);
  }

    // IMAGENES PRODUCTOS //

    // openModalImgs(prod): void
    // {
    //   if (prod == 0) {
    //     this.prod = {
    //       id_prod: 0
    //     }
    //   }
    //   else
    //   {
    //     this.prod = prod;
    //   }
      
    //   const dialogRef = this.dialog.open(ModalImgsProductoComponent, {
    //     height: 'fit-content',
    //     width: 'fit-content',
    //     panelClass: 'custom-modalbox',
    //   });

    //   dialogRef.afterClosed().subscribe(res=>
    //     {
    //       this.getSubProdImgsComercio()
    //     });

    // }

    getImagenesProducto(id){
      return this.http.get(`${API_URL}/api/getImagenesProducto/`+id)
    }

    nuevaImagen(imagen){
      return this.http.post(`${API_URL}/api/guardarImagen`, imagen);
    }

    editarImagen(imagen){
      return this.http.post(`${API_URL}/api/editarImagen`, imagen);
    }

    eliminarImagen(imagen){
      return this.http.post(`${API_URL}/api/eliminarImagen`, imagen);
    }

    // COLORES //

    getColores(){

    }

    guardarColores(colores){
      return this.http.post(`${API_URL}/api/guardarColores`, colores);
    }

    // TAMAÑOS Y MATERIALES //

    guardarTamaños(tamaños){
      return this.http.post(`${API_URL}/api/guardarTamaños`, tamaños);
    }

    guardarMateriales(materiales){
      return this.http.post(`${API_URL}/api/guardarMateriales`, materiales);
    }

}
