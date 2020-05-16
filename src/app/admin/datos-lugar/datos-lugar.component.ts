import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
//import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, ValidatorFn, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
//import { ModalSubcategoriasComponent } from '../modal-subcategorias/modal-subcategorias.component';

@Component({
  selector: 'app-datos-lugar',
  templateUrl: './datos-lugar.component.html',
  styleUrls: ['./datos-lugar.component.css']
})
export class DatosLugarComponent implements OnInit {

  comercio =
  {
    imagen:'',
    nombre:'',
    direccion: '',
    img_portada: '',
    subcategoria:'',
    descripcion:'',
    entrega:'',
    medida_entrega:''
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
  listaSubCategoriasComercios;
  form;


  constructor(private adminService:AdminService, private fb: FormBuilder) {}

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
          nombre: res[0].nombre,
          direccion: res[0].direccion,
          img_portada: res[0].portada,
          subcategoria: res[0].subcategoria,
          descripcion: res[0].descripcion,
          entrega: res[0].entrega,
          medida_entrega: res[0].medida_entrega
        }

        this.form.controls['subcategoria'].setValue(this.comercio.subcategoria);
        this.form.controls['nombre'].setValue(this.comercio.nombre);
        this.form.controls['descripcion'].setValue(this.comercio.descripcion);
        this.form.controls['direccion'].setValue(this.comercio.direccion);
        this.form.controls['entrega'].setValue(this.comercio.entrega);
        this.form.controls['medida_entrega'].setValue(this.comercio.medida_entrega);

        this.adminService.getSubCategoriasComercios().subscribe(
          res=>
          {
            this.adminService.listaSubCategorias = res;
            this.listaSubCategoriasComercios = res;
          }
          ,err => {console.log(err);}
        );
      },err => {
        console.log(err);});

    this.form = this.fb.group
    ({
      'nombre': new FormControl('', [ Validators.required ]),
      'subcategoria': new FormControl('', [ Validators.required ]),
      'descripcion': new FormControl('', [ Validators.required ]),
      'direccion': new FormControl('', [ Validators.required ]),
      'entrega': new FormControl('', [ Validators.required ]),
      'medida_entrega': new FormControl('', [ Validators.required ]),
    });
  }

  changeImg(event){
    this.imgURL = this.pathPortadas + (event.target.value)
  }

  get nombre() { return this.form.get('nombre'); }
  get subcategoria() { return this.form.get('subcategoria'); }
  get descripcion() { return this.form.get('descripcion'); }
  get direccion() { return this.form.get('direccion'); }
  get entrega() { return this.form.get('entrega'); }
  get medida_entrega() { return this.form.get('medida_entrega'); }

  getUrlImagen()
  {
    return "../../../assets/imgs/comercios/"+this.adminService.comercioSeleccionado.imagen;
  }

  getSubcategoriasComercio()
  {
    this.adminService.getSubCategoriasComercios().subscribe(
      res=>{
        this.listaSubCategoriasComercios = res;
        this.adminService.listaSubCategorias = res;
      },
      err => {
        console.log(err);
      });
  }

  guardarDatos(form)
  {
    const formData: FormData = new FormData();
    if(this.portadaToUpload!=null)
    {
      formData.append('Image', this.portadaToUpload, this.portadaToUpload.name);
    }
    if(this.LogoToUpload!=null)
    {
      formData.append('LogoImage', this.LogoToUpload, this.LogoToUpload.name);
    }
    formData.append("id", this.adminService.comercioSeleccionado.id);
    formData.append("nombre", form.value.nombre);
    formData.append("subcat", form.value.subcategoria);
    formData.append("desc", form.value.descripcion);
    formData.append("direct", form.value.direccion);
    formData.append("entrega", form.value.entrega);
    formData.append("medida_entrega", form.value.medida_entrega);
    formData.append("img_portada", this.adminService.comercioSeleccionado.id + "_portada" + this.extensionPortada)
    formData.append("imagen", this.adminService.comercioSeleccionado.id + "_logo" + this.extensionLogo)



    this.adminService.guardarDatosComercio(formData).subscribe
    (
      res=>
      {
        if(res>0)
        {
          var message = "Los datos se modificaron exitosamente."
      //    this.openMessage(message, "Cerrar", 5000, "");
        }
        else
        {
          var message = "Valide que los datos sean correctos. Si el error persiste comuniquese con el administrador."
      //    this.openMessage(message, "Cerrar", 50000, "error");
        }
      },err => {console.log(err);});
  }

  resetFrom()
  {
    this.form.reset();
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


/*
   public openMessage(message, action, durationMilliSeconds, type)
   {
    var clase = null;
    if (type == "error")
    {
      clase = "snack-bar-alert";
    }
    this.snackBar.open(message, action, { duration: durationMilliSeconds, panelClass: clase });
  }*/

  /*
  openModalSubcategorias()
  {
    const dialogRef = this.dialog.open(ModalSubcategoriasComponent, {
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'custom-modalbox',
      data:'comercio'
    });

    dialogRef.afterClosed().subscribe(result =>
    {
      this.getSubcategoriasComercio();
    });
  }
  */
}
