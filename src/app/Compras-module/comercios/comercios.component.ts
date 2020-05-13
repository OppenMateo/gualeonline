import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {

  listaProductosSubcategoria=[];

  constructor(private comprasService:ComprasService) { }

  ngOnInit() {
    this.getProductosComercio();
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

}
