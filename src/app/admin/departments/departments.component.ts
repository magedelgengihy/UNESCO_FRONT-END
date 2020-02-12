import { CrudOperationsService } from './../services/crud-operations.service';
import { BaseComponentView } from './../common/base-component-view';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent extends BaseComponentView{
  constructor(private crudOP: CrudOperationsService){
    super(crudOP, "http://localhost:3000/api/departments");
  }
}
