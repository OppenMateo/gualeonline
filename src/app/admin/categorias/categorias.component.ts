import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AuthService } from 'src/app/auth.service';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  nuevo:boolean=false;
  msgError='';
  editarCrop=false;

  constructor(private adminService:AdminService, private fb: FormBuilder) { }

  
  showNuevo()
  {
    this.nuevo=true;
    this.newCrop=false;
  }

  hideNuevo()
  {
    this.croppedImage='';
    this.nuevo=false;
    this.msgError='';
    this.new_cat={
      imagen: '',
      imagen_nombre: '',
      nombre: ''
    };
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
      console.log(this.categorias);});
  }

  guardarCategoriaProd(categoriaProd){
    this.msgError='';
    let comercio = this.adminService.comercioSeleccionado[0].id;

    if (categoriaProd.imagen_nombre == '' || categoriaProd.imagen_nombre == null) {
      let currentDate = new Date();
      let fechaHora = currentDate.getDate()
      + (currentDate.getMonth()+1)
      + currentDate.getFullYear()
      + currentDate.getHours()
      + currentDate.getMinutes()
      + currentDate.getSeconds();
      categoriaProd.imagen_nombre = comercio + '_' + fechaHora + '_' + categoriaProd.nombre;
    }

    if(categoriaProd.imagen == '')
    {
      this.msgError="Debe cargar una imagen a la categoria."
    }
    if(categoriaProd.nombre == '')
    {
      this.msgError+=" Debe cargar un nombre a la categoria."
    }
    else
    {
      categoriaProd.id_comercio = comercio;
      this.adminService.guardarCategoriaProducto(categoriaProd).subscribe(res=>{
        this.newCrop = false;
        this.new_cat={
          imagen: '',
          imagen_nombre: '',
          nombre: ''
        }
        this.cargarLista();
        {
          this.adminService.openMessage(res, "Cerrar", 50000, "error");  
        }
        this.hideNuevo();
      });
    }
  }

  editarCategoriaProd(cat,i){
    let element = document.getElementById(i) as HTMLInputElement;
    let valiu= element.value;
    cat.nombre_categoria = valiu;
    console.log(cat, i);
    this.adminService.editarCategoriaProducto(cat).subscribe(res=>{
      debugger;
      this.edit = 10000;
      cat.cropper = false;
      this.cargarLista();
      {
        this.adminService.openMessage(res, "Cerrar", 10000, "error");  
      }
    }
    ,err =>
    {
      var message = "Los datos no se pudieron modificar."
      this.adminService.openMessage(message, "Cerrar", 50000, "error");  
      console.log(err);
    });
  }

  eliminarCategoriaProd(categoriaProd){
    this.adminService.eliminarCategoriaProducto(categoriaProd).subscribe(res=>{
      this.cargarLista();
      {
        this.adminService.openMessage(res, "Cerrar", 10000, "error");  
      }
    }
    ,err =>
    {
      var message = "Los datos no se pudieron modificar."
      this.adminService.openMessage(message, "Cerrar", 50000, "error");  
      console.log(err);
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
    this.newCrop=false;
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
  imageLoaded()
  {
    this.new_cat.imagen = '';
    this.newCrop = true;
  }

  cropperReady(){}

  aceptarCropper()
  {
    this.new_cat.imagen=this.croppedImage
    this.imageChangedEvent = '';
    this.newCrop = false;
  }

  cancelarCrop()
  {
    this.croppedImage = '';
    this.new_cat.imagen='';
    this.imageChangedEvent='';
    this.newCrop = false;
  }

  loadImageFailed(){

  }

}
