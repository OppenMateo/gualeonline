import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-form-nuevo-comercio',
  templateUrl: './form-nuevo-comercio.component.html',
  styleUrls: ['./form-nuevo-comercio.component.css']
})
export class FormNuevoComercioComponent implements OnInit {

  formComercio;

  constructor(private FormBuilder: FormBuilder, private authService: AuthService, public dialogRef: MatDialogRef<FormNuevoComercioComponent>,
    private comprasService: ComprasService) { }

  ngOnInit() {
    this.formComercio = new FormGroup({
      'nombre': new FormControl('', [ Validators.required ]),
      'url': new FormControl('', [ Validators.required ]),
    },)
  }

  get nombre() {return this.formComercio.get('nombre');}
  get url() {return this.formComercio.get('url');}

  guardarComercio(datos)
  {
    var comercio =
    {
      nombre:datos.value.nombre,
      url:datos.value.url
    }
    console.log(datos);
    console.log(comercio);
    
    this.comprasService.guardarComercio(comercio).subscribe(
      res=>
      {
        console.log(res);
      },

      err=>
      {
        console.log(err);
        return;
      });
  }

}
