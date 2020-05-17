import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { MatDialog } from '@angular/material/dialog';
import { isNgTemplate } from '@angular/compiler';
import { ModalAddProductoComponent } from '../modal-add-producto/modal-add-producto.component';
import { provideRoutes } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ModalDatosCompraComponent } from '../modal-datos-compra/modal-datos-compra.component';

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
  }
  
  constructor(private comprasService:ComprasService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getProductosComercio();
    this.comprasService.getComercioSeleccionado().subscribe(
      res=>
      {
        this.comprasService.comercioSeleccionado = res[0];
        console.log(res);

        this.comercio =
        {
          imagen: res[0].imagen,
          nombre: res[0].nombre,
          subcategoria: res[0].subcategoria,
          descripcion: res[0].descripcion,
          portada: res[0].portada,
          entrega: res[0].entrega,
          direccion: res[0].entrega
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

        console.log(this.listaProductosSubcategoria)
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
  }

}
