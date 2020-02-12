import { Component, OnInit } from '@angular/core';
import { CrudOperationsService } from '../services/crud-operations.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {

  baseURL = "http://localhost:3000/api/news";
  departmentURL = "http://localhost:3000/api/departments";

  documents = [];
  departments:any = [];
  organizations = [
    {_id:0, name:"UNESCO"},
    {_id:1, name:"ALESCO"},
    {_id:2, name:"ISESCO"}
  ]

  categories = [
    {_id:0, nameEn:"award", nameAr:"جائزة"},
    {_id:1, nameEn:"activity",nameAr:"نشاط"},
    {_id:2, nameEn:"conference", nameAr:"مؤتمر"}
  ]

  constructor(private crudService: CrudOperationsService) { }

  ngOnInit() {

    this.getDepartments();
  }

  createSubmit(fCreate) {
    console.log(fCreate.value);
    const fd = new FormData(fCreate);
    this.crudService.create(this.baseURL, fd)
      .subscribe(
        res => {
          console.log(res);
        }
        , err => {
          console.log(err);
        });
  }

  getDepartments(){
    this.crudService.getAll(this.departmentURL)
    .subscribe(
      res=>{
        this.departments = res;
      },
      err=>{
        console.log(err);
      })
  }
  
}
