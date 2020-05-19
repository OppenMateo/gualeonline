import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ComprasService } from '../Compras-module/compras.service';

@Component({
  selector: 'app-modal-iniciar-sesion',
  templateUrl: './modal-iniciar-sesion.component.html',
  styleUrls: ['./modal-iniciar-sesion.component.css']
})
export class ModalIniciarSesionComponent implements OnInit {

  constructor(public authService: AuthService, private comprasService: ComprasService, public dialogRef: MatDialogRef<ModalIniciarSesionComponent>,) { }

  ngOnInit(): void {
  }


}
