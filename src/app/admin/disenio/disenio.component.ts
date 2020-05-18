import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, ValidatorFn, AbstractControl, FormGroup, FormControl } from '@angular/forms';

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

  constructor(private adminService:AdminService, private fb: FormBuilder) { }

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
          portadaToUpload: File = null,
          LogoToUpload: File = null
        }
        if (this.comercio.img_portada == null) {
          this.imgPortada = "sushi_template_1.jpg";
        }else{
          this.extensionPortada = '.' + this.comercio.img_portada.split('.')[1];
        }
        if (this.comercio.imagen == null) {
          this.imgLogo = "";
        }else{
          this.extensionLogo = '.' + this.comercio.imagen.split('.')[1];
        }
        this.imgURL = this.pathPortadas + this.imgPortada;
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
    console.log(files);
    console.log(typeof files);
    console.log(typeof this.imgURL);
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
    this.comercio.disenio = this.design;
    const formData: FormData = new FormData();
    if (this.comercio.portadaToUpload != null) {
      //formData.append('portadaToUpload', this.comercio.portadaToUpload, this.comercio.img_portada);
      this.comercio.img_portada = this.comercio.id_comercio + "_portada" + this.extensionPortada;
    }else{
      this.comercio.img_portada = this.imgPortada;
    }
    if (this.comercio.LogoToUpload != null) {
      formData.append('LogoToUpload', this.comercio.LogoToUpload, this.comercio.imagen);
      this.comercio.imagen = this.comercio.id_comercio + "_logo" + this.extensionLogo;
    }else{
      this.comercio.imagen = this.imgLogo;
    }

    formData.append('imgURL', this.imgURL);
    formData.append("id_comercio", this.comercio.id_comercio.toString());
    formData.append("disenio", this.comercio.disenio.toString());
    formData.append("imagen", this.comercio.imagen);
    formData.append("img_portada", this.comercio.img_portada);

    this.adminService.guardarImagenesComercio(formData).subscribe
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

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.imgURL = event.base64;
    /*
    let b64 = this.croppedImage.split(',')[1];

    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, {type: contentType});
      return blob;
    }

    const contentType = 'image/png';

    const blob = b64toBlob(b64, contentType);
    const blobUrl = URL.createObjectURL(blob);

    var myfile = new File([blob], "coso.png");
    //var myFile = this.blobToFile(blob, "my-image.png");
    //console.log(myFile);
    */
  }

  public blobToFile = (theBlob: Blob, fileName:string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
      //console.log(this.imageChangedEvent);
      //console.log(this.imageChangedEvent.target.files[0]);

  }

  imageLoaded(){

  }

  cropperReady(){

  }

  loadImageFailed(){

  }
}
