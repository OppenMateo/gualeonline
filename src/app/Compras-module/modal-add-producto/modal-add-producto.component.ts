import { Component, OnInit, Inject } from '@angular/core';
import { ComprasService } from '../compras.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-producto',
  templateUrl: './modal-add-producto.component.html',
  styleUrls: ['./modal-add-producto.component.css']
})
export class ModalAddProductoComponent implements OnInit {

  cantidad=1;

  constructor(private comprasService:ComprasService, @Inject(MAT_DIALOG_DATA) public data: any) { }

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

}
