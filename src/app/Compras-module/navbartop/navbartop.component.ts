import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../../auth.service'
import { ComprasService } from '../compras.service'
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.css']
})
export class NavbartopComponent implements OnInit {

  currentUser;

  constructor(public dialog: MatDialog, private authService: AuthService, public comprasService: ComprasService, private router:Router, public adminService:AdminService) {
    this.authService.currentUser.subscribe(res=>this.currentUser = res);
    console.log(this.currentUser)
   }

  ngOnInit() {
  }

  redirectComercio()
  {
    this.router.navigate(['/Admin/Productos'])
  }

  mostrarMenuAdmin()
  {
    if(this.router.url.substring(0, 6)=='/Admin')
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  

  openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  openModalRegister()
  {
    this.authService.openModalRegister();
  }

  openModalLogin()
  {
    this.authService.openModalLogin();
  }

  logOut()
  {
    this.authService.logOut();
  }

  openModalNuevoComercio()
  {
    this.comprasService.openModalNuevoComercio();
  }


}
