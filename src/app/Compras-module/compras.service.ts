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
  cantidadTotalProductos=0;
  totalPagar = 0;

  constructor(private http:HttpClient, public dialog: MatDialog, private authService: AuthService)
  {
    this.authService.currentUser.subscribe(x=>this.currentUser = x)
    {
      this.getPedidosPendientes()
    };
  }

  getDirecciones(){
    return this.http.get(`${API_URL}/api/getDireccion/`+this.currentUser.usuario.id);
  }

  guardarDireccion(direccion){
    return this.http.post(`${API_URL}/api/guardarDireccion`,direccion);
  }

  editarDireccion(direccion){
    return this.http.post(`${API_URL}/api/editarDireccion`,direccion);
  }

  eliminarDireccion(direccion){
    return this.http.post(`${API_URL}/api/eliminarDireccion`,direccion);
  }

  totalProductosCarrito(){
    this.cantidadTotalProductos = 0;
    this.totalPagar = 0;
    this.pedidoActivo.forEach(pedido => {
      this.cantidadTotalProductos+=pedido.cantidad;
      this.totalPagar += pedido.cantidad * pedido.precio_producto;
    });
  }

  getCategorias()
  {
    return this.http.get(`${API_URL}/api/getCategorias`);
  }

  getSubcategoriasProductosComercio()
  {
    var id = 4;
    return this.http.get(`${API_URL}/api/getSubcatProductosComercio/`+id)
  }

  getSubProdImgsComercio()
  {
    var id = this.comercioSeleccionado.id;
    return this.http.get(`${API_URL}/api/getSubcategoriasProductosImgsComercio/`+id)
  }

  getComercioSeleccionado()
  {
    var id = 4;
    return this.http.get(`${API_URL}/api/getComercio/`+id);
  }

  getComercioUrl(url)
  {    
    return this.http.get(`${API_URL}/api/getComercioUrl/`+url);
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


  // ----- PEDIDOS ------ //


  getPedidosPendientes()
  {
    if(this.currentUser!=null)
    {
      var id=this.currentUser.usuario.id;
      this.http.get(`${API_URL}/api/getPedidosPendientes/`+id).subscribe(
        res=>
        {
          this.pedidoActivo = res;
          this.totalProductosCarrito()
      });
    }
  }

  guardarPedido(pedido)
  {
    return this.http.post(`${API_URL}/api/guardarPedido`, pedido);
  }

  guardarDetallePedido(detallePedido)
  {
    return this.http.post(`${API_URL}/api/guardarDetallePedido`, detallePedido);
  }

  eliminarPedido(pedido)
  {
    this.http.delete(`${API_URL}/api/borrarPedido/`+pedido).subscribe(
      res=>
      {
        this.getPedidosPendientes();
    });
  }

  borrarDetallePedido(detpedido){
    return this.http.post(`${API_URL}/api/borrarDetallePedido`, detpedido).subscribe(
      res=>
      {
        this.getPedidosPendientes();
      }
    );
  }


  sumarDetallePedido(detpedido){
    return this.http.post(`${API_URL}/api/sumarDetallePedido`, detpedido);
  }

  restarDetallePedido(detpedido){
    return this.http.post(`${API_URL}/api/restarDetallePedido`, detpedido);
  }

}


