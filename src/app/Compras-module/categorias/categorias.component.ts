import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listaCategorias;

  constructor(private comprasService:ComprasService, private authService:AuthService) { }

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


  openModalRegister()
  {
    this.authService.openModalRegister();
  }

  openModalLogin()
  {
    this.authService.openModalLogin();
  }

}
