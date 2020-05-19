import { Component, OnInit, Inject } from '@angular/core';
import { ComprasService } from '../compras.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-producto',
  templateUrl: './modal-add-producto.component.html',
  styleUrls: ['./modal-add-producto.component.css']
})
export class ModalAddProductoComponent implements OnInit {

  cantidad=1;

  constructor(private comprasService:ComprasService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalAddProductoComponent>) { }

  ngOnInit() {
    console.log(this.data)
  }

  agregar()
  {
    this.cantidad++;
  }

  restar()
  {
    if(this.cantidad>=1)
    {
      this.cantidad--;
    }
  }

  agregarProducto()
  {
    var detalle=
    {
      producto:this.data,
      cantidad:this.cantidad,
      aclaracion:'aguanta',
      total:20
    }

    this.dialogRef.close(detalle);
  }

}
