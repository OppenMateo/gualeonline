import { Component, OnInit, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AdminService } from '../admin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  file;
  ruta_imagenes = 'https://api.gualeonline.com.ar/public/img/productos/';
  imgs;
  prod_id;
  imagen_croppeada= {
    id_producto: 0,
    nombre: '',
    url: '',
    id_comercio: 0
  }

  constructor(public adminService:AdminService, public dialogRef: MatDialogRef<ModalImgsProductoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.adminService.prod !== 0) {
      this.imagen_croppeada.id_producto = this.data.id_prod;
      console.log(this.adminService.prod)
    }
    else
    {
      this.editando= false;
      this.formNewImg= true;
    }

    this.adminService.getComercioSeleccionado().subscribe(res=> {
      this.imagen_croppeada.id_comercio = res[0].id;
      this.getImagenes();
    });
  }

  // getImagenes(){
  //   this.adminService.getImagenesProducto(this.data.id_prod).subscribe(res=>{
  //     this.imgs = res;
  //   });
  // }

  nuevaImagen(file){
    this.editando_crop = false;
    let currentDate = new Date();
      let fechaHora = currentDate.getDate().toString()
      + (currentDate.getMonth()+1).toString()
      + currentDate.getFullYear().toString()
      + currentDate.getHours().toString()
      + currentDate.getMinutes().toString()
      + currentDate.getSeconds().toString();
      this.imagen_croppeada.nombre = fechaHora;

      if(this.data != 0)
      {
        // this.adminService.prod.imgs.push(
        //   {
        //     image:this.imagen_croppeada.url,
        //     nombre:this.imagen_croppeada.nombre
        //   });

        var imagen=
        {
          image:this.imagen_croppeada.url,
          nombre:this.imagen_croppeada.nombre,
          id_producto:this.data.id_prod,
          id_comercio:this.adminService.currentUser.usuario.id_comercio
        }

        this.adminService.nuevaImagen(imagen).subscribe();        
      }
      else
      {
        this.adminService.imagenProd.push({
          file:this.imagen_croppeada.url,
          nombreImg:this.imagen_croppeada.nombre
        })
      };

      var ret=
      {
        image:this.imagen_croppeada.url,
        nombre:this.imagen_croppeada.nombre,
        thumbImage:null
      }
      
      this.dialogRef.close(ret);
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
      // this.getImagenes();
    });

  }

  // eliminarImagen(img){
  //   if (confirm("¿Eliminar la foto?")) {
  //     this.adminService.eliminarImagen(img).subscribe(res=>{
  //       this.getImagenes();
  //     });

  //   }
  // }

  fileChangeEvent(event: any): void {
    // this.nuevaImagen(event);
    this.editando_crop = true;
    this.imageChangedEvent = event;
    var reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(event.files[0]); 
    reader.onload = (_event) => { 
      this.file = reader.result; 
    }
  }

  guardarImagen()
  {
    this.nuevaImagen(this.file)
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
