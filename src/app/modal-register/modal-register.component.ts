import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../Compras-module/compras.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MustMatch } from '../helpers/mustMatch';


@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  formUsuario;
  mostrarError= false;

  constructor(private comprasService:ComprasService, private FormBuilder: FormBuilder, private authService:AuthService,
     public dialogRef: MatDialogRef<ModalRegisterComponent>) { }

  ngOnInit() {
    this.formUsuario = new FormGroup({
      'nombre': new FormControl('', [ Validators.required ]),
      'telefono': new FormControl('', [ Validators.required ]),
      'email': new FormControl('', [ Validators.required ]), 
      'usuario': new FormControl('', [ Validators.required]),
      'pass': new FormControl('', [ Validators.required ]),
      'passrepeat': new FormControl('', [ Validators.required ]),
    },

    { 
      validators: MustMatch
    });
  }

  get nombre() { return this.formUsuario.get('nombre'); }
  get telefono() { return this.formUsuario.get('telefono'); }
  get email() { return this.formUsuario.get('email'); }
  get usuario() { return this.formUsuario.get('usuario'); }
  get pass() { return this.formUsuario.get('pass'); }
  get passrepeat() { return this.formUsuario.get('passrepeat'); }


  guardarUsuario(usuario)
  {
    var nombre_usuario =
    {
      nombre_usuario:usuario.value.usuario
    }

    if(usuario.invalid)
    {
      this.mostrarError=true;
      return;
    }
  
  this.authService.validarUsuario(nombre_usuario).subscribe
  (x=>
    {
      var res=x;
      if(res.toString()!="")
      {
        this.formUsuario.setErrors({userExists: true});
        return;
      }
      else
      {
        var user=
        {
          nombre:usuario.value.nombre,
          usuario:usuario.value.usuario,
          password:usuario.value.pass,
          telefono:usuario.value.telefono,
          email:usuario.value.email
        }
      

      this.authService.guardarUsuario(user).subscribe
      (x=>
        {
          var usuario =
          {
            nombre_usuario:user.usuario,
            password:user.password
          }

          this.authService.login(usuario).subscribe(x=>
            {
              this.dialogRef.close();
            }),

            err=>
            {
              console.log(err);
              this.formUsuario.setErrors({userExists: true});
              return;
            }
        });
      }
    }    
  )}

  validarUserName(control) 
  {    
    return this.authService.validarUsuario(control.value).subscribe
    (data => 
    {
      let res: string = data['usuario'].nombre_usuario;
      if (res === control.value) 
      {
        control.setErrors({userExists: true});
        return {'alreadyExist': true};
      } else {        
        return null
      }
    });
  }

  openModalLogin()
  {
    this.dialogRef.close('login');
  }

}
