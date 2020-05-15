import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalLoginComponent } from 'src/app/modal-login/modal-login.component';
import { ModalRegisterComponent } from 'src/app/modal-register/modal-register.component'

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.css']
})
export class NavbartopComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalLogin(): void
  {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => 
    {                
      // this.homeComponente.ngOnInit();
    });
  }

  openModalRegister(): void
  {
    const dialogRef = this.dialog.open(ModalRegisterComponent, {
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => 
    {      
      
    });
  }

}
