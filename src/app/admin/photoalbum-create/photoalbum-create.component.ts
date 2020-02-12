import { Component, OnInit } from '@angular/core';
import { CrudOperationsService } from '../services/crud-operations.service';

@Component({
  selector: 'app-photoalbum-create',
  templateUrl: './photoalbum-create.component.html',
  styleUrls: ['./photoalbum-create.component.css']
})
export class PhotoalbumCreateComponent implements OnInit {

  baseURL = "http://localhost:3000/api/photoalbums";
  deaprtmentsURL = "http://localhost:3000/api/departments";

  departments: any = [
    { _id: 0, nameEn: "department1" }
  ];
  constructor(private crud: CrudOperationsService) { }

  ngOnInit() {
    this.getDepartments();
  }

  createSubmit(fCreate) {
    //console.log(fCreate.value);
    //console.log(fCreate);
    const fd = new FormData(fCreate);
    this.createPhotoalbum(fd);
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

  createPhotoalbum(data) {
    this.crud.create(this.baseURL, data)
      .subscribe(
        res => {
          console.log(res);
        }
        , err => {
          console.log(err);
        })
  }

}
