import { CrudOperationsService } from './../services/crud-operations.service';
import { BaseComponentView } from './../common/base-component-view';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent extends BaseComponentView {

  constructor(private crudOp: CrudOperationsService){
    super(crudOp, "http://localhost:3000/api/publications");
  }
}
