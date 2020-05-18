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
    id_comercio: 0,
    diseño: 0,
    imagen:'',
    img_portada: '',
    portadaToUpload: File = null,
    LogoToUpload: File = null
  }

  design= 0;
  //VARIABLES DE PORTADA Y LOGO
  extensionLogo = '.jpeg';
  extensionPortada = '.jpeg';

  imgURL:any;
  imgLogoURL:any;
  imagePath;
  imgPortada = 'sushi_3.jpg';
  imgLogo = '';
  pathPortadas = "https://api.gualeonline.com.ar/public/img/portadas/";
  pathLogos = "https://api.gualeonline.com.ar/public/img/logos/";
  ///

  hover;
  hover2;
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
          id_comercio: res[0].id,
          diseño: res[0].diseño,
          imagen: res[0].imagen,
          img_portada: res[0].portada,
          portadaToUpload: File = null,
          LogoToUpload: File = null
        }

        this.design = this.comercio.diseño;
        this.changeImgPortada(this.comercio.img_portada);
        this.changeImgLogo(this.comercio.imagen);
      })
  }

  getUrlImagen()
  {
    return "../../../assets/imgs/comercios/"+this.adminService.comercioSeleccionado.imagen;
  }

  changeImgPortada(event){
    if (typeof event == 'object') {
      this.imgURL = this.pathPortadas + (event.target.value)
    }else{
      this.imgURL = this.pathPortadas + event;
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
    this.comercio.portadaToUpload = files.item(0);
    this.extensionPortada = this.comercio.portadaToUpload.type.replace('image/', '.');
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
    this.comercio.LogoToUpload = files.item(0);
    this.extensionLogo = this.comercio.LogoToUpload.type.replace('image/', '.');
  }

  guardarImagenes(){
    this.comercio.diseño = this.design;
    this.comercio.img_portada = this.comercio.id_comercio + "_portada" + this.extensionPortada;
    this.comercio.imagen = this.comercio.id_comercio + "_logo" + this.extensionLogo;
    this.adminService.guardarImagenesComercio(this.comercio).subscribe
    (res=>
      {
        if(res>0)
        {
          var message = "Los datos se modificaron exitosamente."
        }
        else
        {
          var message = "Valide que los datos sean correctos. Si el error persiste comuniquese con el administrador."
        }
      },err => {console.log(err);}
    )
    /*
    if(this.comercio.portadaToUpload!=null)
      {
        formData.append('Image', this.portadaToUpload, this.portadaToUpload.name);
      }
      if(this.comercio.LogoToUpload!=null)
      {
        formData.append('LogoImage', this.LogoToUpload, this.LogoToUpload.name);
      }
      formData.append("img_portada", this.adminService.comercioSeleccionado.id + "_portada" + this.extensionPortada);
      formData.append("imagen", this.adminService.comercioSeleccionado.id + "_logo" + this.extensionLogo);
      */
  }


}
