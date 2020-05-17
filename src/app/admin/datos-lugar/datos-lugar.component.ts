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
        console.log(err);}
    );


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

    this.getHorarios();
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

  newHorario(dias, diasCod, desde, hasta, desde2, hasta2) {
    if (diasCod == '') {
      this.dias.forEach(element => {
        let dia = document.getElementById(element) as HTMLInputElement;
        if (dia.checked) {
          dias.push(dia.value);
          diasCod+= dia.getAttribute('codigo');
        }
      });
    }

    if (desde == '' || hasta == '') {
      desde = document.getElementById('desde') as HTMLInputElement;
      hasta = document.getElementById('hasta') as HTMLInputElement;
      desde2 = document.getElementById('desde2') as HTMLInputElement;
      hasta2 = document.getElementById('hasta2') as HTMLInputElement;
      desde = desde.value;
      hasta = hasta.value;
      desde2 = desde2.value;
      hasta2 = hasta2.value;
    }

    let horario = {
      id: this.horarios.length + 1 ,
      dias,
      diasCod,
      desde,
      hasta,
      desde2,
      hasta2
    };

    this.horarios.push(horario);

    /* crear html*/
    /*
    let divHorarios = document.getElementById("horarios") as HTMLInputElement;
    divHorarios.innerHTML += '<span id="horario_'+this.horarios.length+'">'+horario.dias+' de '+horario.desde+' a '+horario.hasta+' hs';
    if (horario.desde2 !=='' && horario.hasta2 !=='') {
      divHorarios.innerHTML += ' y de '+ horario.desde2+' a '+horario.hasta2+' hs.</span><br>';
    }else{
      divHorarios.innerHTML += '.</span><br>';
    }
      divHorarios.innerHTML += '<button id="btn_'+this.horarios.length+'" class="btn btn-danger" (click)="deleteHorario(horario_'+this.horarios.length+')">X</button>"';
    */
      /* */
    this.toggleHorarios();
  }

  deleteHorario(id){
    console.log(id);
    document.getElementById('horario_'+id).remove();
    this.horarios.splice(id,1);
    console.log(this.horarios);
  }

  guardarHorarios(){
    this.horarios.forEach(h => {
      h.id = this.adminService.comercioSeleccionado.id;
      console.log(h);
      this.adminService.guardarHorarios(h).subscribe
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
    });
  }

  getHorarios(){
    this.adminService.getHorarios().subscribe(
      res=>{
        let horarios = Object.values(res); //lo convierto en objeto
        horarios.forEach(h => {
          if (h.desde2 == null || h.hasta2 == null) {
            h.desde2 = '';
            h.hasta2 = '';
          }
          h.diasCod = h.dias;
          h.dias = Array.from(h.dias);
          for (let index = 0; index < h.dias.length; index++) {
            //const element = array[index];
            switch (h.dias[index]) {
              case '0':
                h.dias[index] = 'lunes';
              break;
              case '1':
                h.dias[index] = 'martes';
              break;
              case '2':
                h.dias[index] = 'miércoles';
              break;
              case '3':
                h.dias[index] = 'jueves';
              break;
              case '4':
                h.dias[index] = 'viernes';
              break;
              case '5':
                h.dias[index] = 'sábado';
              break;
              case '6':
                h.dias[index] = 'domingo';
              break;
            }
          }
          this.newHorario(h.dias, h.diasCod, h.desde, h.hasta, h.desde2, h.hasta2);
        }); //end forEach horarios
        console.log(this.horarios);
      },
      err => {
        console.log(err);
      }
    );
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
