import { ActivatedRoute } from '@angular/router';
import { CrudOperationsService } from './../services/crud-operations.service';
import { Component, OnInit } from '@angular/core';
import { Subdepartment } from '../common/subdepartment';




@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  baseURL = "http://localhost:3000/api/departments";
  id: string;

  department: any = {
    nameEn: "",
    nameAr: "",
    descriptionEn: "",
    descriptionAr: "",
  }

  updatedDepartment = {}
  subdepartments: any = [];

  subdepartment = {
    nameEn: "",
    nameAr: "",
    descriptionEn: "",
    descriptionAr: ""
  }

  isDeprtmentUpdated = false;
  constructor(
    private crudService: CrudOperationsService,
    private route: ActivatedRoute
  ) {
    route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
      })
  }


  ngOnInit() {

    this.crudService.getById(this.baseURL, this.id)
      .subscribe(
        res => {
          this.department = res;
          this.subdepartments = this.department.subdepartments;
        },
        err => {
          console.log(err);
        })
  }

  setNameEn(e: { target: { value: string; }; }) {
    this.subdepartment.nameEn = e.target.value;
  }

  setNameAr(e: { target: { value: string; }; }) {
    this.subdepartment.nameAr = e.target.value;
  }

  setDescriptionEn(e: { target: { value: string; }; }) {
    this.subdepartment.descriptionEn = e.target.value;
  }
  setDescriptionAr(e: { target: { value: string; }; }) {
    this.subdepartment.descriptionAr = e.target.value;
  }

  addSubdepartment(e) {
    const newSubDepeartment = new Subdepartment(
      this.subdepartment.nameEn, this.subdepartment.descriptionEn,
      this.subdepartment.nameAr, this.subdepartment.descriptionAr
    );
    this.subdepartments.push(newSubDepeartment);
    //this.isSubdeprtmentAdded = true;
    this.createSubdepartment(newSubDepeartment);
    console.log(this.subdepartment, this.subdepartments);
  }

  removeSubdep(subdep) {
    console.log('remove sub dep is called');
    if (!subdep._id) {
      this.subdepartments = this.subdepartments
        .filter(supdepartment => supdepartment.nameEn !== subdep.nameEn);
    } else {
      this.subdepartments = this.subdepartments
        .filter(supdepartment => supdepartment._id !== subdep._id);
      
        this.deleteSubdepartment(subdep._id);
    }
  }

  updateDepartment(key: string, value: string) {
    this.updatedDepartment[key] = value;
    this.isDeprtmentUpdated = true;
  }

  createSubdepartment(sudep) {
    const subDepURL = this.baseURL + '/' + this.id + '/subdepartments';
    this.crudService.create(subDepURL, sudep)
      .subscribe(
        res => {
          let myRes = <any>res;
          console.log(res);
          this.subdepartments = myRes.subdepartments;
        },
        err => {
          console.log(err);
        });
  }

  deleteSubdepartment(id) {

    const delURL = `${this.id}/subdepartments/${id}`;
    this.crudService.delete(this.baseURL, delURL)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        })
  }

  updateSubmit(fUpdate) {

    if (this.isDeprtmentUpdated) {
      this.crudService.update(this.baseURL, this.id, this.updatedDepartment)
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          });
    }
  }

}
