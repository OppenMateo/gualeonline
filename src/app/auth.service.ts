import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { tap, map } from 'rxjs/operators';

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

  constructor(private http: HttpClient, public dialog: MatDialog) { }

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

}
