import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  nuevo:boolean=false;

  constructor(private adminService:AdminService, private fb: FormBuilder) { }

  
  showNuevo()
  {
    this.nuevo=true;
    this.newCrop=false;
  }

  hideNuevo()
  {
    this.nuevo=false;
  }

  categorias;

  new_cat={
    imagen: '',
    imagen_nombre: '',
    nombre: ''
  }

  edit= 10000;
  imageChangedEvent: any = '';
  imageChangedEventLista: any = '';
  croppedImage: any = '';
  newCrop = false;

  ngOnInit(): void {
    this.adminService.getComercioSeleccionado().subscribe(res=>{
      this.adminService.comercioSeleccionado = res;
      this.cargarLista();
    });
  }

  cargarLista(){
    this.adminService.getCategoriasProducto().subscribe(res=> {
      this.categorias = res;
      this.categorias.forEach(element => {
        element.crop = false;
        element.imagen = "https://api.gualeonline.com.ar/public/img/categorias_productos/" + element.imagen_nombre;
      });
    });
  }

  guardarCategoriaProd(categoriaProd){
    let comercio = this.adminService.comercioSeleccionado[0].id;

    if (categoriaProd.imagen_nombre == '' || categoriaProd.imagen_nombre == null) {
      let currentDate = new Date();
      let fechaHora = currentDate.getDate()
      + (currentDate.getMonth()+1)
      + currentDate.getFullYear()
      + currentDate.getHours()
      + currentDate.getMinutes()
      + currentDate.getSeconds();
      categoriaProd.imagen_nombre = comercio + '_' + fechaHora;
      this.hideNuevo();
    }

    if (categoriaProd.imagen == '') {
      alert("Es necesario subir una imagen para la categoría.");
    }else{
      categoriaProd.id_comercio = comercio;
      this.adminService.guardarCategoriaProducto(categoriaProd).subscribe(res=>{
        this.newCrop = false;
        this.new_cat={
          imagen: '',
          imagen_nombre: '',
          nombre: ''
        }
        this.cargarLista();
      });
    }
  }

  editarCategoriaProd(cat,i){
    this.edit = i;
    let element = document.getElementById(i) as HTMLInputElement;
    let valiu= element.value;
    cat.nombre_categoria = valiu;

    this.adminService.editarCategoriaProducto(cat).subscribe(res=>{
      this.edit = 10000;
      cat.cropper = false;
      this.cargarLista();
    });
  }

  eliminarCategoriaProd(categoriaProd){
    this.adminService.eliminarCategoriaProducto(categoriaProd).subscribe(res=>{
      this.cargarLista();
    });
  }

  // IMAGEN/CROPPER //

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.new_cat.imagen = event.base64;
  }

  fileChangeEvent(event: any): void {
    this.newCrop = true;
    this.imageChangedEvent = event;
  }

  fileChangeEventLista(event: any, categoria, index): void {
    categoria.cropper = true;
    categoria.otraImagen = true;
    this.imageChangedEventLista = event;
    /*
    console.log(this.imageChangedEvent);
    let file_element = document.getElementById("file_"+index) as HTMLInputElement;
    let cropper_element = document.getElementById("cropper_"+index) as HTMLInputElement;
    console.log(categoria);
    */
}

imageCroppedLista(event: ImageCroppedEvent, categoria) {
  categoria.imagen = event.base64;
}


  imageLoaded(){

  }

  cropperReady(){

  }

  loadImageFailed(){

  }

}
