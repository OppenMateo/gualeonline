import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormControlName, Validators, FormBuilder, FormControl } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ColorEvent } from 'ngx-color';

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

  imageObject: Array<object> = [{
    image: 'https://i.picsum.photos/id/580/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/580/400/350.jpg',    
  }, {
    image: 'https://i.picsum.photos/id/838/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/838/400/350.jpg',
  }, {
    image: 'https://i.picsum.photos/id/93/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/93/400/350.jpg'
  }, {
    image: 'https://i.picsum.photos/id/543/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/543/400/350.jpg'
  }, {
    image: 'https://i.picsum.photos/id/613/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/613/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/609/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/717/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/717/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'}
  
  ];

  get nombre() { return this.formEdicion.get('nombre'); }
  get descripcion() { return this.formEdicion.get('descripcion'); }
  get precio() { return this.formEdicion.get('precio'); }
  get promocional() { return this.formEdicion.get('promocional'); }

  getProductosComercio()
  {
    this.adminService.getSubProdComercio().subscribe(
      res=>{                        
        this.listaRes = res;
        this.agruparProdSubcat();        
      }
      ,err => {console.log(err);});
  }

  agruparProdSubcat()
  {        
    this.listaSubProd = [];

    this.listaRes.forEach(item => 
    {
      if(this.listaSubProd.filter(x=>x.subcat.id == item.subcat_id).length==0)
      {
        var subcatProd = {
          subcat : {id:item.subcat_id, nombre:item.nombre },
          prod:[]
        }

        this.listaSubProd.push(subcatProd);
        var index = this.listaSubProd.indexOf(subcatProd);
        var prod = 
        {
          item:item,
          imgs: 
          [{
              image: 'https://i.picsum.photos/id/580/1020/600.jpg',
              thumbImage: 'https://i.picsum.photos/id/580/400/350.jpg',    
            }, {
              image: 'https://i.picsum.photos/id/838/1020/600.jpg',
              thumbImage: 'https://i.picsum.photos/id/838/400/350.jpg',
            }]
        }
        this.listaSubProd[index].prod.push(prod);
      }      
      else
      {
        var subcatProd = {
          subcat : {id:item.subcat_id, nombre:item.nombre },
          prod:[]
        }
        var reg = this.listaSubProd.find(x=>x.subcat.id == item.subcat_id);
        var index = this.listaSubProd.indexOf(reg);
        var prod = {
          item:item,
          imgs: 
          [{
              image: 'https://i.picsum.photos/id/580/1020/600.jpg',
              thumbImage: 'https://i.picsum.photos/id/580/400/350.jpg',    
            }, {
              image: 'https://i.picsum.photos/id/838/1020/600.jpg',
              thumbImage: 'https://i.picsum.photos/id/838/400/350.jpg',
            }]
        }
        this.listaSubProd[index].prod.push(prod);
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

    aceptarImg(prod)
    {
      debugger;
    }

    handleChange($event: ColorEvent) {
      console.log($event.color);
    } 
}
