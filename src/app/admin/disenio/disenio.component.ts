import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, ValidatorFn, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-disenio',
  templateUrl: './disenio.component.html',
  styleUrls: ['./disenio.component.css']
})
export class DisenioComponent implements OnInit {

  comercio =
  {
    id_comercio: 0,
    disenio: 0,
    imagen:'',
    img_portada: '',
    portada_file: File = null,
    logo_file: File = null
  }

  design= 0;
  //VARIABLES DE PORTADA Y LOGO
  extensionLogo = '.jpeg';
  extensionPortada = '.jpeg';

  guardarImagen = false;
  imgURL:any = '';
  imgLogoURL:any;
  imagePath;
  imgPortada = '';
  imgLogo = '';
  pathPortadas = "https://api.gualeonline.com.ar/public/img/portadas/";
  pathLogos = "https://api.gualeonline.com.ar/public/img/logos/";
  ///

  hover;
  hover2;
  message;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  template = false;
  cropping:boolean = false;

  constructor(private adminService:AdminService, private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.adminService.getComercioSeleccionado().subscribe(
      res=>
      {
        this.adminService.comercioSeleccionado = res[0];

        this.comercio =
        {
          id_comercio: res[0].id,
          disenio: res[0].diseño,
          imagen: res[0].imagen,
          img_portada: res[0].portada,
          portada_file: File = null,
          logo_file: File = null
        }
         if (this.comercio.img_portada == null) {
           this.imageChangedEvent='';
          //  this.comercio.img_portada = "template_sushi_1.jpg";
           this.template = true;
         }

        if(this.comercio.img_portada != null)
        {
          this.imgURL = this.pathPortadas + this.imgPortada;
        }

        if (this.comercio.img_portada.split('_')[0] == 'template') {
          this.template = true;
        }
        if (this.comercio.imagen == null) {
          this.imgLogo = "";
        }else{
          this.extensionLogo = '.' + this.comercio.imagen.split('.')[1];
        }

        this.imgLogoURL = '';
        this.design = this.comercio.disenio;
        this.changeImgPortada(this.comercio.img_portada);
        this.changeImgLogo(this.comercio.imagen);
      })
  }


  getUrlImagen()
  {
    return "../../../assets/imgs/comercios/"+this.adminService.comercioSeleccionado.imagen;
  }

  cambiarDiseno(temp)
  {
    this.imageChangedEvent='';
    this.design = temp;
    if(this.design!=temp)
    {
      this.imageChangedEvent = '';
      // this.imgURL = '';
    }
  }

  cancelar()
  {
    //limpiar campos form
  }
  
  mostrarTemplate(temp)
  {

  }

  changeImgPortada(event){
    if (typeof event == 'object') {
      this.imgURL = this.pathPortadas + (event.target.value);
      this.template = true;
      this.comercio.img_portada = event.target.value;
      this.croppedImage = this.pathPortadas + (event.target.value);
    }
    else
    {
      this.imgURL = this.pathPortadas + event;
      this.croppedImage = this.pathPortadas + event;
      this.cropping = false;
    }
  }

  changeImgLogo(logo){
    this.imgLogoURL = this.pathLogos + logo;
  }


  preview(files)
  {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "No ha cargado una imagen válida.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
    this.imgPortada = '';
    this.comercio.portada_file = files.item(0);
    this.extensionPortada = this.comercio.portada_file.type.replace('image/', '.');
  }

  uploadLogo(files)
  {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "No ha cargado una imagen válida.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgLogoURL = reader.result;
    }
    this.comercio.logo_file = files.item(0);
    this.extensionLogo = this.comercio.logo_file.type.replace('image/', '.');
  }

  guardarImagenes(){
    this.comercio.disenio = this.design;
    this.cropping = false;
    this.imgURL = this.croppedImage;
    this.imageChangedEvent = '';
    const formData: FormData = new FormData();

    if(this.comercio.disenio==1)
    {
      if(this.imgURL == '')
      {
        var message = "No se ha modificado ningún valor."
        this.adminService.openMessage(message, "Cerrar", 50000, "error"); 
      }
    }

    if (this.comercio.logo_file != null) {
      this.comercio.imagen = this.comercio.id_comercio + "_logo" + this.extensionLogo;
      formData.append('logo_file', this.comercio.logo_file, this.comercio.imagen);
    }else{
      this.comercio.imagen = this.imgLogo;
    }

    formData.append('imgURL', this.imgURL);
    formData.append("id_comercio", this.comercio.id_comercio.toString());
    formData.append("disenio", this.comercio.disenio.toString());
    formData.append("imagen", this.comercio.imagen);
    formData.append("img_portada", this.comercio.img_portada);
    formData.append("template", this.template.toString());

    this.adminService.guardarImagenesComercio(formData).subscribe
    (res=>
      {
        this.adminService.openMessage(res, "Cerrar", 50000, "error");  
      }
      ,err =>
      {
        var message = "Los datos no se pudieron modificar."
        this.adminService.openMessage(message, "Cerrar", 50000, "error");  
        console.log(err);
      }
    )
  }

  imageCropped(event: ImageCroppedEvent)
  {
    this.croppedImage = event.base64;
    // this.imgURL = event.base64;
    this.comercio.img_portada = this.comercio.id_comercio + "_portada.jpeg";
    this.template = false;
  }

  fileChangeEvent(event: any): void
  {
    this.cropping = true;
    this.imageChangedEvent = event;
  }

  imageLoaded(){

  }

  cropperReady(){
  }

  loadImageFailed(){
  }

  mostrarLoadImg()
  {
    this.imgURL = '';
    this.cropping = true;
  }

  aceptarCropper()
  {
    this.cropping = false;
    this.imgURL = this.croppedImage;
    this.imageChangedEvent = '';
  }

  cancelarCropper()
  {
    this.imgURL = '';
    this.cropping = false;
    this.imageChangedEvent = '';
  }
}
