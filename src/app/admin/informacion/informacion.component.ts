import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  agregarHorario = false;
  dias=['lunes', 'martes', 'miércoles','jueves','viernes','sábado','domingo']
  horario = {
    dias: [],
    desde: '',
    hasta: '',
    desde2: '',
    hasta2: ''
  }

  horarios = [];
  telefono;
  medio_pago;

  constructor(private adminService:AdminService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  toggleHorarios() {
    this.agregarHorario = !this.agregarHorario;
    this.horario.desde='';
    this.horario.hasta='';
  }


  newHorario() {
    this.horario.dias = [];
    this.horario.desde = '';
    this.horario.desde2 = '';
    this.horario.hasta = '';
    this.horario.hasta2 = '';
    this.dias.forEach(element => {
      let dia = document.getElementById(element) as HTMLInputElement;
      if (dia.checked) {
        this.horario.dias.push(dia.value);
      }
    });

    let desde = document.getElementById('desde') as HTMLInputElement;
    let hasta = document.getElementById('hasta') as HTMLInputElement;
    let desde2 = document.getElementById('desde2') as HTMLInputElement;
    let hasta2 = document.getElementById('hasta2') as HTMLInputElement;
    this.horario.desde = desde.value;
    this.horario.hasta = hasta.value;
    this.horario.desde2 = desde2.value;
    this.horario.hasta2 = hasta2.value;

    this.horarios.push(this.horario)
    let divHorarios = document.getElementById("horarios") as HTMLInputElement;
    divHorarios.innerHTML +=
    '<span id="horario_'+this.horarios.length+'">'+this.horario.dias+'</span> de '+this.horario.desde+' a '+this.horario.hasta+' hs';
    if (this.horario.desde2 !=='' && this.horario.hasta2 !=='') {
      divHorarios.innerHTML += ' y de '+ this.horario.desde2+' a '+this.horario.hasta2+' hs.<br>';
    }else{
      divHorarios.innerHTML += '.<br>';
    }
    this.toggleHorarios();
  }

  guardar(){
    console.log(this.telefono)
    console.log(this.medio_pago)

    let datos = {
      telefono: this.telefono,
      medio_pago: this.medio_pago
    };

    /*
    this.adminService.guardarInfoComercio(datos).subscribe
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
      */
  }

}
