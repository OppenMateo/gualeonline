import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ComprasService } from '../Compras-module/compras.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  formUsuario;
  messagePass;
  messageUser;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private comprasService: ComprasService,
    public dialogRef: MatDialogRef<ModalLoginComponent>, public dialog: MatDialog ) {
    this.formUsuario = this.formBuilder.group(
      {
        usuario:'',
        pass:'',
      }
    )
   }

  ngOnInit() {
  }

  get usuario()  { return this.formUsuario.get('usuario'); }
  get pass() { return this.formUsuario.get('pass'); }

  login(user)
  {
    var usuario =
    {
      nombre_usuario: user.value.usuario,
      password: user.value.pass
    }
    
    if(user.invalid)
    {
      this.formUsuario.get('usuario').setErrors({userExists: true});
      return;
    }

    this.authService.login(usuario).subscribe(
      x=>
      {              
        if(x['success'] != true)
        {
          if(x['error']=='pass')
          {
            this.messagePass = x['data'];
          }
          else
          {
            this.messagePass = '';
          }
          if(x['error']=='usuario')
          {
            this.messageUser = x['data'];
          }
          else
          {
            this.messageUser = '';
          }
        }
        else
        {
          this.comprasService.getPedidosPendientes();
          this.dialogRef.close();
        } 
      }
    )
  }

  openModalRegister()
  {
    this.dialogRef.close('register');
  }

}
