import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ComprasService } from '../compras.service';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-form-nuevo-comercio',
  templateUrl: './form-nuevo-comercio.component.html',
  styleUrls: ['./form-nuevo-comercio.component.css']
})
export class FormNuevoComercioComponent implements OnInit {

  formComercio;
  currentUser;

  constructor(private FormBuilder: FormBuilder, private authService: AuthService, public dialogRef: MatDialogRef<FormNuevoComercioComponent>,
    private comprasService: ComprasService, private snackBar: MatSnackBar, public adminService: AdminService) { 
      this.authService.currentUser.subscribe(res=>this.currentUser = res); 
    }

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
        var id_comercio =
        {
          id_user:this.currentUser.usuario.id,
          id_comercio:res
        }
        this.comprasService.asignarComercio(id_comercio).subscribe(
          res=>{
            this.authService.logOut();
          })
        console.log(res);

        if(res>0)
        {
          var message = "Los datos se modificaron exitosamente."
          this.adminService.openMessage(message, "Cerrar", 5000, "")
        }
        else
        {
          var message = "Valide que los datos sean correctos. Si el error persiste comuniquese con el administrador."
          this.adminService.openMessage(message, "Cerrar", 50000, "error");  
        }
      },

      err=>
      {
        console.log(err);
        return;
      });

      this.dialogRef.close();
  }

}
