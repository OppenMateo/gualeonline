import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { MatDialog } from '@angular/material/dialog';
import { isNgTemplate } from '@angular/compiler';
import { ModalAddProductoComponent } from '../modal-add-producto/modal-add-producto.component';
import { provideRoutes, Router } from '@angular/router';
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
    id:0,
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
  listaSubProd;
  listaRes;

  constructor(private comprasService:ComprasService, private authService: AuthService, public dialog: MatDialog, private router:Router) { }

  ngOnInit() 
  {
    var url = this.router.url;
    var urlComercio = url.substring(url.indexOf('/')+1, url.length);
        
    this.comprasService.getComercioUrl(urlComercio).subscribe(
      res=>
      {
        this.comprasService.comercioSeleccionado = res[0];

        console.log(res);
        this.comercio =
        {
          id:res[0].id,
          imagen: res[0].imagen,
          nombre: res[0].nombre,
          subcategoria: res[0].subcategoria,
          descripcion: res[0].descripcion,
          portada: res[0].portada,
          entrega: res[0].entrega,
          direccion: res[0].entrega,
          disenio: res[0].diseño
        }

        this.getProductosComercio();
        console.log(this.comercio);
      },
      err=>{
        console.log(err);})
  }

  getProductosComercio()
  {
    this.comprasService.getSubProdImgsComercio().subscribe(res=>
    {
      this.listaRes = res;
      this.agruparProdSubcat();
    });
  }

  agruparProdSubcat()
  {
    this.listaSubProd = [];    
    var subcatProd;

    this.listaRes.forEach(item =>
    {
      if(this.listaSubProd.filter(x=>x.subcat.id_subcat == item.id_subcat).length==0)
      {
        var subcat= {id_subcat:item.id_subcat, nombre:item.nombre_categoria };
        var listaImgs;
        var listaColores;

        if(item.imagen != null)
        {
          listaImgs = [
          {
            nombre: item.imagen,
            image:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen,
            thumbImage:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen
          }];
        }
        else
        {
          listaImgs = [];
        }
        
        if(item.color != null)
        {
          listaColores = [{color:item.color}];
        }

        var prod =
        {
          id_prod:item.id_prod,
          nombre:item.nombre_producto,
          descripcion:item.descripcion_producto,
          precio:item.precio_producto,
          imgs:listaImgs,
          colores:listaColores
        }

        var subcatProd = {
          subcat : subcat,
          prod:[prod]
        }
        this.listaSubProd.push(subcatProd);
      }
      else
      {
        var reg = this.listaSubProd.find(x=>x.subcat.id_subcat == item.id_subcat);
        var index = this.listaSubProd.indexOf(reg);

        if(this.listaSubProd[index].prod.filter(x=>x.id_prod == item.id_prod).length==0)
        {
          var listaImgs;
          if(item.imagen != null)
          {
            listaImgs = [
              {
                nombre: item.imagen,
                image:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen,
                thumbImage:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen
              }];
          }
          else
          {
            listaImgs = [];
          }

          if(item.color != null)
          {
            listaColores = [{color:item.color}];
          }

          var prod =
          {
            id_prod:item.id_prod,
            nombre:item.nombre_producto,
            descripcion:item.descripcion_producto,
            precio:item.precio_producto,
            imgs:listaImgs,
            colores:listaColores
          }

          this.listaSubProd[index].prod.push(prod);
        }
        else
        {
          var reg = this.listaSubProd.find(x=>x.subcat.id_subcat == item.id_subcat);
          var index = this.listaSubProd.indexOf(reg);

          var regProd = this.listaSubProd[index].prod.filter(x=>x.prod_id==item.prod_id);
          if(regProd.length>0)
          {
            var indexProd = this.listaSubProd[index].prod.indexOf(regProd[0]);
          }

          if(item.imagen != null && this.listaSubProd[index].prod[indexProd].imgs.filter(x=>x.imagen == item.imagen).length==0)
          {
            var img = {
              nombre: item.imagen,
              image:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen,
              thumbImage:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen
            };

            this.listaSubProd[index].prod[indexProd].imgs.push(img);
          }

          if(item.color != null && this.listaSubProd[index].prod[indexProd].colores.filter(x=>x.color == item.color).length==0)
          {
            var color = { color: item.color };
            this.listaSubProd[index].prod[indexProd].colores.push(color);
          }
        }
      }
    });
    console.log("Lista Sub Prod:");
    console.log(this.listaSubProd);
  }

  // getProductosComercio()
  // {
  //   var listaSubcategorias=[];
  //   var listaRes;
  //   this.comprasService.getSubcategoriasProductosComercio().subscribe
  //   (res=>
  //     {
  //       listaRes=res;
  //       listaRes.forEach(elem=>
  //       {
  //         if(listaSubcategorias.filter(x=>x.subcat_id == elem.subcat_id).length<=0)
  //         {
  //           listaSubcategorias.push({
  //             subcat_id : elem.subcat_id,
  //             nombre: elem.nombre,
  //           })
  //         }
  //       });

  //       listaSubcategorias.forEach(item=>
  //       {
  //         this.listaProductosSubcategoria.push(
  //         {
  //           subcat:item,
  //           prod:listaRes.filter(x=>x.subcat_id == item.subcat_id)
  //         })
  //       })

  //     },
  //     err=> {console.log(err);});
  // }

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
