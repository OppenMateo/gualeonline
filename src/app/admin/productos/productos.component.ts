import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormControlName, Validators, FormBuilder, FormControl } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ColorEvent } from 'ngx-color';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

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
  categorias;

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
    idComercio: 0,
    imagenes:[],
    colores:[],
  }

  colores = [];
  newColor = {
    color: '',
    id_producto: 0
  }
  materiales = [];
  tamaneos = [];

  constructor(public adminService:AdminService,private FormBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit()
  {
    this.adminService.getComercioSeleccionado().subscribe(res=>{
      this.adminService.comercioSeleccionado = res;
      this.getCategorias();
      console.log(res)
    });
    this.getProductosComercio();
  }

  getCategorias(){
    this.adminService.getCategoriasProducto().subscribe(res=>{
      this.categorias = res;
      console.log("categorias:");
      console.log(this.categorias);
    });
  }

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
        this.listaRes = res;
        console.log("Lista Res:");
        console.log(this.listaRes);
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
        var listaColores;
        var listaTamaneos;
        var listaMateriales;

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

        if(item.color != null)
        {
          listaColores = [{color:item.color}];
        }
        else
        {
          listaColores = [];
        }

        if(item.tamaño != null)
        {
          listaTamaneos = [{tamaneo:item.tamaño}];
        }

        if(item.material != null)
        {
          listaMateriales = [{material:item.material}];
        }

        var prod =
        {
          id_prod:item.id_prod,
          nombre:item.nombre_producto,
          descripcion:item.descripcion_producto,
          precio:item.precio_producto,
          imgs:listaImgs,
          colores:listaColores,
          materiales: listaMateriales,
          tamaneos: listaTamaneos
        }

        var subcatProd = {
          subcat : subcat,
          prod:[prod]
        }
        this.listaSubProd.push(subcatProd);
        console.log(this.listaSubProd);
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

          if(item.color != null)
          {
            listaColores = [{color:item.color}];
          }
          else
          {
            listaColores = [];
          }

          if(item.tamaño != null)
          {
            listaTamaneos = [{tamaneo:item.tamaño}];
          }

          if(item.material != null)
          {
            listaMateriales = [{material:item.material}];
          }

          var prod =
          {
            id_prod:item.id_prod,
            nombre:item.nombre_producto,
            descripcion:item.descripcion_producto,
            precio:item.precio_producto,
            imgs:listaImgs,
            colores:listaColores,
            tamaneos: listaTamaneos,
            materiales: listaMateriales
          }

          this.listaSubProd[index].prod.push(prod);
        }
        else
        {
          var reg = this.listaSubProd.find(x=>x.subcat.id_subcat == item.id_subcat);
          var index = this.listaSubProd.indexOf(reg);

          var regProd = this.listaSubProd[index].prod.filter(x=>x.id_prod==item.id_prod);
          if(regProd.length>0)
          {
            var indexProd = this.listaSubProd[index].prod.indexOf(regProd[0]);
          }

          if(item.imagen != null && this.listaSubProd[index].prod[indexProd].imgs.filter(x=>x.nombre == item.imagen).length==0)
          {
            var img = {
              nombre: item.imagen,
              image:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen,
              thumbImage:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen
            };

            this.listaSubProd[index].prod[indexProd].imgs.push(img);
          }

          if(item.color != null && this.listaSubProd[index].prod[indexProd].colores.filter(x=>x.color == item.color).length==0)
          {
            var color = { color: item.color };
            this.listaSubProd[index].prod[indexProd].colores.push(color);
          }
          /*
          if(item.tamaño != null && this.listaSubProd[index].prod[indexProd].tamaneos.filter(x=>x.tamaneo == item.tamaño).length==0)
          {
            var tamaneo = { tamaneo: item.tamaño };
            this.listaSubProd[index].prod[indexProd].tamaneos.push(tamaneo);
          }
          */
          if(item.material != null && this.listaSubProd[index].prod[indexProd].materiales.filter(x=>x.material == item.material).length==0)
          {
            var material = { material: item.material };
            this.listaSubProd[index].prod[indexProd].materiales.push(material);
          }
        }
      }
    });
    console.log("Lista Sub Prod:");
    console.log(this.listaSubProd);
  }

  cancelarNewProducto(){
    this.agregarProducto = false;
    this.new_producto.nombre = '';
    this.new_producto.descripcion = '';
    this.new_producto.precio = '';
    this.new_producto.subcategoria = '';
    this.colores = [];
    this.adminService.eliminarImgsProducto(0).subscribe();
  }

  quitarNewColor(i){
    this.colores.splice(i,1);
  }

  addMaterial(){
    let material = {
      material: '',
      id_producto: 0
    }
    this.materiales.push(material);
  }

  prueba(){
    console.log(this.tamaneos);
  }

  addTamaneo(){
    let tamaneo = {
      tamaneo: '',
      id_producto: 0
    }
    this.tamaneos.push(tamaneo);
  }

  guardarProducto(){
    this.new_producto.imagenes = this.adminService.imagenProd;
    this.new_producto.colores = this.colores;
    this.new_producto.idComercio = this.adminService.currentUser.usuario.id_comercio;
        
    this.adminService.guardarProducto(this.new_producto).subscribe(res=>{
      this.new_producto = {
        nombre: '',
        descripcion: '',
        precio: '',
        subcategoria: '',
        idComercio: 0,
        imagenes: [],
        colores: [],
      }
      if (this.colores.length > 0) {
        this.colores.forEach(element => {
          element.id_producto = res;
          this.adminService.guardarColores(element).subscribe();
        });
      }
      if (this.materiales.length > 0) {
        this.materiales.forEach(mat => {
          mat.id_producto = res;
          this.adminService.guardarMateriales(mat).subscribe();
        });
      }
      if (this.tamaneos.length > 0) {
        this.tamaneos.forEach(tam => {
          tam.id_producto = res;
          this.adminService.guardarTamaños(tam).subscribe();
        });
      }

      this.agregarProducto = false;
      this.getProductosComercio();
    });
  }

  editProducto(prod, i){
    this.prod_edit = prod.id_prod;
  }

  modifProducto(prod,subcat_id, i){

    let nombre_html = document.getElementById('nombre_'+prod.id_prod) as HTMLInputElement;
    let desc_html = document.getElementById('desc_'+prod.id_prod) as HTMLInputElement;
    let precio_html = document.getElementById('precio_'+prod.id_prod) as HTMLInputElement;
    let nombre_value = nombre_html.value;
    let desc_value = desc_html.value;
    let precio_value = precio_html.value;

    let producto = {
      id: prod.id_prod,
      nombre: nombre_value,
      descripcion: desc_value,
      precio: precio_value,
      idComercio: this.adminService.comercioSeleccionado[0].id,
      subcategoria: subcat_id
    }

    this.prod_edit = 10000;
    this.adminService.editarProducto(producto).subscribe(res=>{
      this.getProductosComercio();
    });
  }

  editarNombre(event, prod)
  {
    var producto=
    {
      id: prod.id,
      nombre: event.target.value,
      descripcion: prod.descripcion,
      precio: prod.precio,
    }
    console.log(prod)
    this.adminService.editarProducto(producto).subscribe();
  }

  eliminarProducto(prod){
    if (confirm("¿Eliminar este producto?")) {
      this.adminService.eliminarProducto(prod.id_prod).subscribe(res=>{
        this.getProductosComercio();
      });
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



    // COLOR COSO //
    handleChange($event: ColorEvent) {
      console.log($event.color);
    }

    handleChangeComplete($event: ColorEvent) {
      console.log($event.color);
      this.newColor.color = $event.color.hex;
      this.pushColor();
    }

    pushColor(){
      this.colores.push(this.newColor);
      this.newColor = {
        color: '',
        id_producto: 0
      }
    }

}
