import { CrudOperationsService } from './../services/crud-operations.service';
import { BaseComponentView } from './../common/base-component-view';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent extends BaseComponentView{
  constructor(private crudOp: CrudOperationsService){
    super(crudOp, "http://localhost:3000/api/users");
  }
}
