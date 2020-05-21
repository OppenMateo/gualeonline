import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { tap, map } from 'rxjs/operators';
import { ModalLoginComponent } from 'src/app/modal-login/modal-login.component';
import { ModalRegisterComponent } from 'src/app/modal-register/modal-register.component'
import { User } from '../app/models/user'
import { ModalIniciarSesionComponent } from './modal-iniciar-sesion/modal-iniciar-sesion.component';

const API_URL:string='https://api.gualeonline.com.ar/public';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User
   {
    return this.currentUserSubject.value;
   }

  openModalLogin(): void
  {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(
      res=>
      {                
        if(res=='register')
        {
          this.openModalRegister();
        }
    });
  }

  openModalRegister(): void
  {
      const dialogRef = this.dialog.open(ModalRegisterComponent, {
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(res=> 
    {      
      if(res=='login')
      {
        this.openModalLogin();
      }
    });
  }

  validarUsuario(user)
  {    
    return this.http.post(`${API_URL}/api/validarUsuario`, user); 
  }

  login(user) 
  {       
     return this.http.post(`${API_URL}/api/auth/login`, user).pipe(
      map(user => {
        if(user['success']!=false)
        {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
        else
        {
          return user;
        } 
        
      })
    ) 
  }

  logOut() 
  {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
  guardarUsuario(user)
  {
    return this.http.post(`${API_URL}/api/guardarUsuario`, user); 
  }

  // openModalIniciarSesion():any
  // {
  //     const dialogRef = this.dialog.open(ModalIniciarSesionComponent, {
  //     height: 'fit-content',
  //     width: 'fit-content',
  //     panelClass: 'custom-modalbox'
  //   });

  //   dialogRef.afterClosed().subscribe(res=>{
  //     return "ok";
  //   },
  //   err=>
  //   {
  //     return "error";
  //   }
  //   );
  //   return "1";
  // }


}
