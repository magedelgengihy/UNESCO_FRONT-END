import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudOperationsService } from '../services/crud-operations.service';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.css']
})
export class PhotoalbumComponent implements OnInit {

  baseURL = "http://localhost:3000/api/photoalbums";

  deaprtmentsURL = "http://localhost:3000/api/departments";

  id: string;

  // to prevent initial errors we define that dummy object
  photoalbum: any = {
    nameEn: "",
    nameAr: "",
    descriptionEn: "",
    descriptionAr: "",
    images: [],
    departmentId: ""
  }

  // object to fill with updated values to submit
  // only updated values.
  isPhotoalbumUpdated = false;
  updatedPhotoalbum ={}
  showSpinner = false;
  images:any = [];

  departments: any = [
    { _id: 0, nameEn: "department1" }
  ];

  constructor(
    private crud: CrudOperationsService,
    private route: ActivatedRoute) {

    route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      })
  }

  ngOnInit() {
    this.getDepartments();
    this.getPhotoalbum();
  }

  getDepartments() {
    this.crud.getAll(this.deaprtmentsURL)
      .subscribe(
        res => {
          this.departments = res;
          console.log(res);
        },
        err => {
          console.log(err);
        })
  }

  getPhotoalbum(){
    this.crud.getById(this.baseURL, this.id)
    .subscribe(
      res=>{
        console.log(res);
        this.photoalbum = res;
      },
      err=>{
        console.log(err);
      })
  }

  updatePhotoalbum(key:string, value:string){
    this.updatedPhotoalbum[key]=value;
    this.isPhotoalbumUpdated = true;
  }

  addImages(files){
    this.showSpinner = true;
    const fd = new FormData();
    console.log(files);
    
    for(let file of files){
      fd.append('images', file);
    }
    this.crud.update(this.baseURL, this.id, fd)
    .subscribe(
      res=>{
        console.log(res);
        this.photoalbum = res;
        this.showSpinner = false;
      },
      err=>{
        this.showSpinner = false;
        console.log(err);
      })
  }

  removeImage(imgName){
    this.showSpinner = true;

    this.crud.delete(this.baseURL,this.id + '?image='+imgName)
    .subscribe(res=>{
      console.log(res);
      this.photoalbum = res;
      this.showSpinner = false;
    },
    err=>{
      console.log(err);
      this.showSpinner = false;
    })
  }

  updateSubmit(){
    this.showSpinner = true;
    console.log(this.updatedPhotoalbum);
    if(this.isPhotoalbumUpdated){
    this.crud.update(this.baseURL, this.id, this.updatedPhotoalbum)
    .subscribe(
      res=>{
        console.log(res);
        this.showSpinner = false;
      },
      err=>{
        this.showSpinner = false;
        console.log(err);
      })
    }
  }
}
