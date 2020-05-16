import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.css']
})
export class NavbartopComponent implements OnInit {

  currentUser;

  constructor(public dialog: MatDialog, private authService: AuthService) {
    this.authService.currentUser.subscribe(res=>this.currentUser = res);
   }

  ngOnInit() {
  } 

  openModalRegister()
  {
    this.authService.openModalRegister();
  }

  openModalLogin()
  {
    this.authService.openModalLogin();
  }

}
