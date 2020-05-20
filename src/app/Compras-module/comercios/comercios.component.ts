import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { MatDialog } from '@angular/material/dialog';
import { isNgTemplate } from '@angular/compiler';
import { ModalAddProductoComponent } from '../modal-add-producto/modal-add-producto.component';
import { provideRoutes } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ModalDatosCompraComponent } from '../modal-datos-compra/modal-datos-compra.component';
import { ModalLoginComponent } from 'src/app/modal-login/modal-login.component';
import { ModalRegisterComponent } from 'src/app/modal-register/modal-register.component';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {

  listaProductosSubcategoria=[];
  comercio =
  {
    imagen:'',
    nombre:'',
    subcategoria:'',
    descripcion:'',
    portada:'',
    entrega:'',
    direccion:'',
    disenio: 0
  }
  detalle=null;

  constructor(private comprasService:ComprasService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getProductosComercio();
    this.comprasService.getComercioSeleccionado().subscribe(
      res=>
      {
        this.comprasService.comercioSeleccionado = res[0];

        this.comercio =
        {
          imagen: res[0].imagen,
          nombre: res[0].nombre,
          subcategoria: res[0].subcategoria,
          descripcion: res[0].descripcion,
          portada: res[0].portada,
          entrega: res[0].entrega,
          direccion: res[0].entrega,
          disenio: res[0].diseño
        }
      },
      err=>{
        console.log(err);})
  }

  getProductosComercio()
  {
    var listaSubcategorias=[];
    var listaRes;
    this.comprasService.getSubcategoriasProductosComercio().subscribe
    (res=>
      {
        listaRes=res;
        listaRes.forEach(elem=>
        {
          if(listaSubcategorias.filter(x=>x.subcat_id == elem.subcat_id).length<=0)
          {
            listaSubcategorias.push({
              subcat_id : elem.subcat_id,
              nombre: elem.nombre,
            })
          }
        });

        listaSubcategorias.forEach(item=>
        {
          this.listaProductosSubcategoria.push(
          {
            subcat:item,
            prod:listaRes.filter(x=>x.subcat_id == item.subcat_id)
          })
        })

      },
      err=> {console.log(err);});
  }

  openModalAddProducto(prod)
  {
    const dialogRef = this.dialog.open(ModalAddProductoComponent, {
      height: 'fit-content',
      width: 'fit-content',
      maxHeight: '90vh',
      panelClass: 'custom-modalbox',
      data: prod,
    });
    dialogRef.afterClosed().subscribe(
      res=>
      {
        this.detalle=res;
        this.validarUsuarioLogueado();
      }
    )
  };


  validarUsuarioLogueado()
  {
    if(this.authService.currentUserValue==null)
    {
     this.openModalLogin();
    }
    else
    {
      this.validarPedidoActivo();
    }
    return true;
  }

  validarPedidoActivo()
  {
    if(this.comprasService.pedidoActivo==null || this.comprasService.pedidoActivo.length==0)
    {
      var pedido=
      {
        usuario:this.comprasService.currentUser.usuario.id,
        fecha: '2020-03-23'
      }
      this.comprasService.guardarPedido(pedido).subscribe(
        res=>
        {
          var detallePedido=
          {
            pedido:res,
            producto:this.detalle.producto.prod_id,
            cantidad:this.detalle.cantidad,
            aclaracion:this.detalle.aclaracion,
            total:this.detalle.total
          }
          this.comprasService.guardarDetallePedido(detallePedido).subscribe(
            res=>
            {
              this.comprasService.getPedidosPendientes();
            })
        })
    }
    else
    {
      var detallePedido=
      {
        pedido:this.comprasService.pedidoActivo[0].id_pedido,
        producto:this.detalle.producto.prod_id,
        cantidad:this.detalle.cantidad,
        aclaracion:this.detalle.aclaracion,
        total:this.detalle.total
      }
      this.comprasService.guardarDetallePedido(detallePedido).subscribe(
        res=>
        {
          this.comprasService.getPedidosPendientes();
        })
    }
  }

  openModalLogin(): void
  {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(
      res=>
      {
        if(res=='register')
        {
          this.openModalRegister();
        }
        if(res==undefined)
        {
          this.validarPedidoActivo();
        }
    });
  }

  openModalRegister(): void
  {
      const dialogRef = this.dialog.open(ModalRegisterComponent, {
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(res=>
    {
      if(res=='login')
      {
        this.openModalLogin();
      }
      if(res==undefined)
      {
        this.validarPedidoActivo();
      }
    });
  }



}
