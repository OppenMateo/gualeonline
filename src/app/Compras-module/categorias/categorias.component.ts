import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listaCategorias;

  constructor(private comprasService:ComprasService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias()
  {
    this.comprasService.getCategorias().subscribe(
      res=>
      {
        console.log(res);
        this.listaCategorias=res;
      },
      err=>
      {
        console.log(err);
      }
    );
  
  }  
}
