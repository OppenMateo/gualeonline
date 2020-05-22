import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-datos-compra',
  templateUrl: './modal-datos-compra.component.html',
  styleUrls: ['./modal-datos-compra.component.css']
})
export class ModalDatosCompraComponent implements OnInit {

  direcciones;
  panel = 1;
  nuevaDireccion = {
    usuario: this.comprasService.currentUser.usuario.id,
    nombre: '',
    nombre_calle: '',
    descripcion_barrio: ''
  }

  constructor(public comprasService: ComprasService) { }

  ngOnInit() {
    this.getDirecciones();
  }

  getDirecciones(){
    this.comprasService.getDirecciones().subscribe(res=> {
      this.direcciones = res;
    });
  }

  modoEditar(direccion){
    this.nuevaDireccion = direccion;
    this.panel = 4;
  }

  guardarDireccion(){
    this.comprasService.guardarDireccion(this.nuevaDireccion).subscribe(res =>
      {
        this.atras();
      }
    );
  }

  editarDireccion(){
    this.comprasService.editarDireccion(this.nuevaDireccion).subscribe(res => {
      this.atras();
    });
  }

  eliminarDireccion(direccion){
    this.comprasService.eliminarDireccion(direccion).subscribe(res => {
      this.getDirecciones();
    });
  }

  atras(){
    this.panel = 2
    this.nuevaDireccion.nombre = '';
    this.nuevaDireccion.nombre_calle = '';
    this.nuevaDireccion.descripcion_barrio = '';
    this.getDirecciones();
  }

  boton() {
    console.log(this.comprasService.currentUser.usuario);
    console.log(this.comprasService.pedidoActivo);
  }

}
