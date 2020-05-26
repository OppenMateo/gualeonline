import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormControlName, Validators, FormBuilder, FormControl } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ColorEvent } from 'ngx-color';
import { of } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaRes;
  listaSubProd;
  formEdicion;
  cat_selected="0";

  imageChangedEvent: any = '';
  croppedImage: any = '';

  prod_edit=10000;
  buscar='';
  agregarProducto=false;
  new_producto = {
    nombre: '',
    descripcion: '',
    precio: '',
    subcategoria: '',
    idComercio: 0
  }

  constructor(private adminService:AdminService,private FormBuilder: FormBuilder) { }

  ngOnInit()
  {
    this.adminService.getComercioSeleccionado().subscribe(res=>{
      this.adminService.comercioSeleccionado = res[0];
    });
    this.getProductosComercio();
/*
    this.formEdicion = new FormGroup({
      'nombre': new FormControl('', [ Validators.required ]),
      'descripcion': new FormControl('', [ Validators.required ]),
      'precio': new FormControl('', [ Validators.required ]),
      'promocional': new FormControl('', [ Validators.required ])
    })
    */
  }
/*
  get nombre() { return this.formEdicion.get('nombre'); }
  get descripcion() { return this.formEdicion.get('descripcion'); }
  get precio() { return this.formEdicion.get('precio'); }
  get promocional() { return this.formEdicion.get('promocional'); }
*/

  openModalImgs(prod){
    this.adminService.openModalImgs(prod);
  }

  filtrarXcat(id_subcat){
    if (id_subcat == null) {
      this.cat_selected;
    }else{
      this.cat_selected = id_subcat;
    }
  }

  getProductosComercio()
  {
    this.adminService.getSubProdImgsComercio().subscribe(
      res=>{
        console.log('getsubprodimgscomercio:')
        console.log(res);
        this.listaRes = res;
        this.agruparProdSubcat();
      }
      ,err => {console.log(err);});
  }

  agruparProdSubcat()
  {
    this.listaSubProd = [];
    var subcatProd;

    this.listaRes.forEach(item =>
    {
      if(this.listaSubProd.filter(x=>x.subcat.id_subcat == item.id_subcat).length==0)
      {
        var subcat= {id_subcat:item.id_subcat, nombre:item.nombre_categoria };
        var listaImgs;

        if(item.imagen != null)
        {
          listaImgs = [
          {
            nombre: item.imagen,
            image:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen,
            thumbImage:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen
          }];
        }
        else
        {
          listaImgs = [];
        }

        var prod =
        {
          id_prod:item.id_prod,
          nombre:item.nombre_producto,
          descripcion:item.descripcion_producto,
          precio:item.precio_producto,
          imgs:listaImgs
        }

        var subcatProd = {
          subcat : subcat,
          prod:[prod]
        }
        this.listaSubProd.push(subcatProd);
      }
      else
      {
        var reg = this.listaSubProd.find(x=>x.subcat.id_subcat == item.id_subcat);
        var index = this.listaSubProd.indexOf(reg);

        if(this.listaSubProd[index].prod.filter(x=>x.id_prod == item.id_prod).length==0)
        {
          var listaImgs;
          if(item.imagen != null)
          {
            listaImgs = [
              {
                nombre: item.imagen,
                image:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen,
                thumbImage:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen
              }];
          }
          else
          {
            listaImgs = [];
          }

          var prod =
          {
            id_prod:item.id_prod,
            nombre:item.nombre_producto,
            descripcion:item.descripcion_producto,
            precio:item.precio_producto,
            imgs:listaImgs
          }

          this.listaSubProd[index].prod.push(prod);
        }
        else
        {
          var reg = this.listaSubProd.find(x=>x.subcat.id_subcat == item.id_subcat);
          var index = this.listaSubProd.indexOf(reg);

          var regProd = this.listaSubProd[index].prod.filter(x=>x.prod_id==item.prod_id);
          if(regProd.length>0)
          {
            var indexProd = this.listaSubProd[index].prod.indexOf(regProd[0]);
          }

          if(item.imagen != null && this.listaSubProd[index].prod[indexProd].imgs.filter(x=>x.imagen == item.imagen).length==0)
          {
            var img = {
              nombre: item.imagen,
              image:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen,
              thumbImage:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen
            };

            this.listaSubProd[index].prod[indexProd].imgs.push(img);
          }
        }
      }
    });

    console.log("listaSubProd:");
    console.log(this.listaSubProd);
  }

  guardarProducto(){
    this.new_producto.idComercio = this.adminService.comercioSeleccionado.id;
    this.adminService.guardarProducto(this.new_producto).subscribe(res=>{
      this.new_producto = {
        nombre: '',
        descripcion: '',
        precio: '',
        subcategoria: '',
        idComercio: 0
      }
      this.agregarProducto = false;
    });
  }

  editProducto(prod, i){
    this.prod_edit = i;
  }

  modifProducto(prod,subcat_id, i){

    let nombre_html = document.getElementById('nombre_'+i) as HTMLInputElement;
    let desc_html = document.getElementById('desc_'+i) as HTMLInputElement;
    let precio_html = document.getElementById('precio_'+i) as HTMLInputElement;
    let nombre_value = nombre_html.value;
    let desc_value = desc_html.value;
    let precio_value = precio_html.value;

    let producto = {
      id: prod.id_prod,
      nombre: nombre_value,
      descripcion: desc_value,
      precio: precio_value,
      idComercio: this.adminService.comercioSeleccionado.id,
      subcategoria: subcat_id
    }
/*
    const formData: FormData = new FormData();
    formData.append("id", prod.id_prod);
    formData.append("nombre", nombre_value);
    formData.append("descripcion", desc_value);
    formData.append("precio", precio_value);
    formData.append("idComercio", this.adminService.comercioSeleccionado.id);
    formData.append("subcategoria", subcat_id);
*/
    this.adminService.editarProducto(producto).subscribe(res=>{

    });
  }

  eliminarProducto(prod){
    if (confirm("¿Eliminar este producto?")) {
      this.adminService.eliminarProducto(prod.id_prod);
    }
  }

  // FUNCIONES DRAG & DROP //

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          debugger;
          console.log(droppedFile.relativePath, file);
          // this.imageChangedEvent = file;

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }


    // FUNCIONES CROPPER //

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }


    handleChange($event: ColorEvent) {
      console.log($event.color);
    }
}
