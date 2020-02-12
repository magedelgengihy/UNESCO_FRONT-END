import { CrudOperationsService } from './../services/crud-operations.service';
import { BaseComponentView } from './../common/base-component-view';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoalbums',
  templateUrl: './photoalbums.component.html',
  styleUrls: ['./photoalbums.component.css']
})
export class PhotoalbumsComponent extends BaseComponentView {
 constructor(private crudOP: CrudOperationsService){
   super(crudOP, "http://localhost:3000/api/photoalbums")
 }
}
