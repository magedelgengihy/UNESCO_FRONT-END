import { CrudOperationsService } from './../services/crud-operations.service';
import {  } from 'events';
import { Component, OnInit , Output,EventEmitter} from '@angular/core';
import { Subdepartment } from '../common/subdepartment';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  baseURL = "http://localhost:3000/api/departments";

  @Output() additionalHieght = new EventEmitter();
  constructor(private crud: CrudOperationsService) { }

  subDepartmentHeight = '100px';

  subdepartment={
    nameEn:"",
    nameAr:"",
    descriptionEn:"",
    descriptionAr:""
  }
  subdepartments = [];

  ngOnInit() {
  }

  ngDoCheck(){
   
  }

  setNameEn(e){
    this.subdepartment.nameEn = e.target.value;
  }

  setNameAr(e){
    this.subdepartment.nameAr = e.target.value;
  }

  setDescriptionEn(e){
    this.subdepartment.descriptionEn = e.target.value;
  }
  setDescriptionAr(e){
    this.subdepartment.descriptionAr = e.target.value;
  }

  addSubdepartment(e){
    e.stopPropagation();
    this.additionalHieght.emit(this.subDepartmentHeight);
    const newSubDepeartment = new Subdepartment(
      this.subdepartment.nameEn,this.subdepartment.descriptionEn,
      this.subdepartment.nameAr, this.subdepartment.descriptionAr
    );
    this.subdepartments.push(newSubDepeartment);
    console.log(this.subdepartment ,this.subdepartments);
   
  }

  createSubmit(fCreate){
    fCreate.value.subdepartments = this.subdepartments;
    console.log(fCreate.value);
    this.crud.create(this.baseURL, fCreate.value)
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      });
  }
}
