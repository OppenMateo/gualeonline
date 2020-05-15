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

  fileExtension = '.jpeg';
  imgPortada = 'sushi_3.jpg';
  fileToUpload: File = null;
  imageUrl: '../../../assets/imgs/portadas/sushi_2.jpg';
  imgURL:any;
  imagePath;
  message;

  pathPortadas = "../../../assets/imgs/portadas/"
  listaSubCategoriasComercios;
  form;
  constructor(private adminService:AdminService, private fb: FormBuilder) {}

  ngOnInit() {
    this.imgURL = this.pathPortadas + this.imgPortada;
    this.adminService.getComercioSeleccionado().subscribe(
      res=>
      {
        this.adminService.comercioSeleccionado = res[0];

        this.comercio =
        {
          imagen: "../../../assets/imgs/comercios/"+res[0].imagen,
          nombre: res[0].nombre,
          direccion: res[0].direccion,
          img_portada: res[0].id_portada,
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

  guardarDatos(form)
  {
    const formData: FormData = new FormData();
    if(this.fileToUpload!=null)
    {
      formData.append('Image', this.fileToUpload, this.fileToUpload.name);
    }
    formData.append("id", this.adminService.comercioSeleccionado.id);
    formData.append("nombre", form.value.nombre);
    formData.append("subcat", form.value.subcategoria);
    formData.append("desc", form.value.descripcion);
    formData.append("direct", form.value.direccion);
    formData.append("entrega", form.value.entrega);
    formData.append("medida_entrega", form.value.medida_entrega);
    formData.append("img_portada", this.adminService.comercioSeleccionado.id + "_portada" + this.fileExtension)

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
    this.fileToUpload = files.item(0);
    this.imgPortada = '';

    this.fileExtension = this.fileToUpload.type.replace('image/', '.');
    console.log(this.fileExtension);
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

}
