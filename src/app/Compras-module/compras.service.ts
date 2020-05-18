import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog';
import { FormNuevoComercioComponent } from '../Compras-module/form-nuevo-comercio/form-nuevo-comercio.component'
import { ModalDatosCompraComponent } from './modal-datos-compra/modal-datos-compra.component';
import { AuthService } from '../auth.service';

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
  currentUser;
  pedidoActivo=null;
      
  constructor(private http:HttpClient, public dialog: MatDialog, private authService: AuthService) {
    this.authService.currentUser.subscribe(x=>this.currentUser = x)
    {
      this.getPedidosPendientes()};  
   }

  getCategorias()
  {
    return this.http.get(`${API_URL}/api/getCategorias`);
  }

  getPedidosPendientes()
  {
    if(this.currentUser!=null)
    {
    var id=this.currentUser.usuario.id;
    this.http.get(`${API_URL}/api/getPedidosPendientes/`+id).subscribe(
      res=>
        {
          this.pedidoActivo=res;
          console.log(res);
        }
    );}
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

  asignarComercio(comercio)
  {
    return this.http.post(`${API_URL}/api/asignarComercio`, comercio); 
  }

  guardarPedido(pedido)
  {
    return this.http.post(`${API_URL}/api/guardarPedido`, pedido); 
  }

  guardarDetallePedido(detallePedido)
  {
    return this.http.post(`${API_URL}/api/guardarDetallePedido`, detallePedido); 
  }

}


