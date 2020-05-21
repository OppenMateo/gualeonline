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

  constructor(private adminService:AdminService,private FormBuilder: FormBuilder) { }

  ngOnInit() 
  {
    this.getProductosComercio();    

    this.formEdicion = new FormGroup({
      'nombre': new FormControl('', [ Validators.required ]),
      'descripcion': new FormControl('', [ Validators.required ]),      
      'precio': new FormControl('', [ Validators.required ]),
      'promocional': new FormControl('', [ Validators.required ])      
    })
  }

  get nombre() { return this.formEdicion.get('nombre'); }
  get descripcion() { return this.formEdicion.get('descripcion'); }
  get precio() { return this.formEdicion.get('precio'); }
  get promocional() { return this.formEdicion.get('promocional'); }

  getProductosComercio()
  {
    this.adminService.getSubProdImgsComercio().subscribe(
      res=>{                            
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
              image:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen, 
              thumbImage:'https://api.gualeonline.com.ar/public/img/productos/'+item.imagen
            };

            this.listaSubProd[index].prod[indexProd].imgs.push(img);
          }
        }        
      }
    });
       
    console.log(this.listaSubProd);
  }

  modificarProducto(form)
  {

  }

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

  imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void {
      debugger;
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
      debugger;
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

    aceptarImg(prod, elem)
    {
      debugger;
    }

    handleChange($event: ColorEvent) {
      console.log($event.color);
    } 
}
