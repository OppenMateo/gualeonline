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
    telefono: 0,
    medio_pago: 0,
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


  agregarHorario = false;
  dias=['lunes', 'martes', 'miércoles','jueves','viernes','sábado','domingo']
  horarios = [];


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
          telefono: res[0].telefono,
          medio_pago: res[0].medio_pago,
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
        this.form.controls['telefono'].setValue(this.comercio.telefono);
        this.form.controls['medio_pago'].setValue(this.comercio.medio_pago);

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
      'telefono': new FormControl('', [ Validators.required ]),
      'medio_pago': new FormControl('', [ Validators.required ]),
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
  get telefono() { return this.form.get('telefono');}
  get medio_pago() { return this.form.get('medio_pago');}
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
    formData.append("img_portada", this.adminService.comercioSeleccionado.id + "_portada" + this.extensionPortada);
    formData.append("imagen", this.adminService.comercioSeleccionado.id + "_logo" + this.extensionLogo);
    formData.append("telefono", form.value.telefono);
    formData.append("medio_pago", form.value.medio_pago);



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
      },err => {console.log(err);}
    );
  }

  guardarHorarios(){
    console.log(this.horarios);
    this.horarios.forEach(horario => {
      horario.id = this.adminService.comercioSeleccionado.id;
      /*
      this.adminService.guardarHorarios(horario).subscribe
      (
        res=>
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
      );
      */
    });
  }

  codigoDias(dias){
    if (typeof dias[0] == "string") {
      dias.forEach(dia => {
        switch (dia) {
          case 'lunes':
            dia = 0;
          break;
          case 'martes':
            dia = 1;
          break;
          case 'miércoles':
            dia = 2;
          break;
          case 'jueves':
            dia = 3;
          break;
          case 'viernes':
            dia = 4;
          break;
          case 'sábado':
            dia = 5;
          break;
          case 'domingo':
            dia = 6;
          break;
        }
      });
      console.log(dias);
      return dias;
    }else {
      dias.forEach(dia => {
        switch (dia) {
          case 0:
            dia = 'lunes';
          break;
          case 1:
            dia = 'martes';
          break;
          case 2:
            dia = 'miércoles';
          break;
          case 3:
            dia = 'jueves';
          break;
          case 4:
            dia = 'viernes';
          break;
          case 5:
            dia = 'sábado';
          break;
          case 6:
            dia = 'domingo';
          break;
        }
      });
      return dias;
    }
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

  toggleHorarios() {
    this.agregarHorario = !this.agregarHorario;
    //this.horario.desde='';
    //this.horario.hasta='';
  }

  newHorario() {
    let horario = {
      dias: [],
      diasCod: [],
      desde: '',
      hasta: '',
      desde2: '',
      hasta2: ''
    };
    /*
    this.horario.dias = [];
    this.horario.diasCod = [];
    this.horario.desde = '';
    this.horario.desde2 = '';
    this.horario.hasta = '';
    this.horario.hasta2 = '';
    */
    this.dias.forEach(element => {
      let dia = document.getElementById(element) as HTMLInputElement;
      if (dia.checked) {
        horario.dias.push(dia.value);
        horario.diasCod.push(dia.getAttribute('codigo'));
      }
    });

    let desde = document.getElementById('desde') as HTMLInputElement;
    let hasta = document.getElementById('hasta') as HTMLInputElement;
    let desde2 = document.getElementById('desde2') as HTMLInputElement;
    let hasta2 = document.getElementById('hasta2') as HTMLInputElement;
    horario.desde = desde.value;
    horario.hasta = hasta.value;
    horario.desde2 = desde2.value;
    horario.hasta2 = hasta2.value;

    console.clear();
    console.log("horario nuevo:")
    console.log(horario);
    this.horarios.push(horario);
    console.log("todos los horarios:")
    console.log(this.horarios);

    /* crear html*/
    let divHorarios = document.getElementById("horarios") as HTMLInputElement;
    divHorarios.innerHTML += '<span id="horario_'+this.horarios.length+'">'+horario.dias+'</span> de '+horario.desde+' a '+horario.hasta+' hs';
    if (horario.desde2 !=='' && horario.hasta2 !=='') {
      divHorarios.innerHTML += ' y de '+ horario.desde2+' a '+horario.hasta2+' hs.<br>';
    }else{
      divHorarios.innerHTML += '.<br>';
    }
    /* */
    this.toggleHorarios();
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
