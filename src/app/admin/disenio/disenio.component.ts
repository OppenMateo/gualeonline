import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-disenio',
  templateUrl: './disenio.component.html',
  styleUrls: ['./disenio.component.css']
})
export class DisenioComponent implements OnInit {

  comercio =
  {
    imagen:'',
    img_portada: '',
  }

  //VARIABLES DE PORTADA Y LOGO
  extensionLogo = '.jpeg';
  extensionPortada = '.jpeg';
  portadaToUpload: File = null;
  LogoToUpload: File = null;
  imgURL:any;
  imgLogoURL:any;
  imagePath;
  imgPortada = 'sushi_3.jpg';
  imgLogo = '';
  pathPortadas = "../../../assets/imgs/portadas/";
  pathLogos = "../../../assets/imgs/logos/";
  ///

  message;

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.imgURL = this.pathPortadas + this.imgPortada;
    this.imgLogoURL = '';
    this.adminService.getComercioSeleccionado().subscribe(
      res=>
      {
        this.adminService.comercioSeleccionado = res[0];

        this.comercio =
        {
          imagen: "../../../assets/imgs/comercios/"+res[0].imagen,
          img_portada: res[0].portada,
        }
      })
  }

  getUrlImagen()
  {
    return "../../../assets/imgs/comercios/"+this.adminService.comercioSeleccionado.imagen;
  }

  changeImg(event){
    this.imgURL = this.pathPortadas + (event.target.value)
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
    this.portadaToUpload = files.item(0);
    this.extensionPortada = this.portadaToUpload.type.replace('image/', '.');
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
    this.LogoToUpload = files.item(0);
    this.extensionLogo = this.LogoToUpload.type.replace('image/', '.');
  }

  guardarImagenes(){
    if(this.portadaToUpload!=null)
      {
        //formData.append('Image', this.portadaToUpload, this.portadaToUpload.name);
      }
      if(this.LogoToUpload!=null)
      {
        //formData.append('LogoImage', this.LogoToUpload, this.LogoToUpload.name);
      }
      //formData.append("img_portada", this.adminService.comercioSeleccionado.id + "_portada" + this.extensionPortada);
      //formData.append("imagen", this.adminService.comercioSeleccionado.id + "_logo" + this.extensionLogo);
  }


}
