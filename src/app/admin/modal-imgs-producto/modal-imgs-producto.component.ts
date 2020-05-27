import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-modal-imgs-producto',
  templateUrl: './modal-imgs-producto.component.html',
  styleUrls: ['./modal-imgs-producto.component.css']
})
export class ModalImgsProductoComponent implements OnInit {

  formNewImg = false;
  editando_crop = false;
  editando = false;
  imagen_a_editar;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  ruta_imagenes = 'https://api.gualeonline.com.ar/public/img/productos/';
  imgs;
  prod_id;
  imagen_croppeada= {
    id_producto: 0,
    nombre: '',
    url: '',
    id_comercio: 0
  }

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.imagen_croppeada.id_producto = this.adminService.prod.id_prod;
    this.adminService.getComercioSeleccionado().subscribe(res=> {
      this.imagen_croppeada.id_comercio = res[0].id;
      this.getImagenes();
    });
  }

  getImagenes(){
    this.adminService.getImagenesProducto(this.adminService.prod.id_prod).subscribe(res=>{
      this.imgs = res;
    });
  }

  nuevaImagen(){
    this.editando_crop = false;
    //this.imagen_croppeada.nombre = this.imagen_croppeada.id_comercio + "_" + this.imagen_croppeada.id_producto + "_" + this.imageChangedEvent.target.files[0].name;
    let currentDate = new Date();
      let fechaHora = currentDate.getDate().toString()
      + (currentDate.getMonth()+1).toString()
      + currentDate.getFullYear().toString()
      + currentDate.getHours().toString()
      + currentDate.getMinutes().toString()
      + currentDate.getSeconds().toString();
      this.imagen_croppeada.nombre = fechaHora + ".png";

    this.adminService.nuevaImagen(this.imagen_croppeada).subscribe(res=>{
      this.cancelarCrop();
      this.getImagenes();
    });
  }

  cancelarCrop(){
    this.formNewImg = false;
    this.editando_crop = false;
    this.editando = false;
  }

  modoEditar(img){
    this.imagen_a_editar = img;
    this.editando = true;
    this.formNewImg = true;
  }

  editarImagen(){
    let imagen = {
      nombre: this.imagen_a_editar,
      url: this.imagen_croppeada.url
    }
    this.adminService.editarImagen(imagen).subscribe(res=>{
      this.cancelarCrop();
      this.getImagenes();
    });

  }

  eliminarImagen(img){
    if (confirm("¿Eliminar la foto?")) {
      this.adminService.eliminarImagen(img).subscribe(res=>{
        this.getImagenes();
      });

    }
  }

  fileChangeEvent(event: any): void {
    this.editando_crop = true;
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      this.imagen_croppeada.url = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

}
