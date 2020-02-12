import { CrudOperationsService } from './../services/crud-operations.service';
import { BaseComponentView } from './../common/base-component-view';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends BaseComponentView {
  constructor(private crudOp: CrudOperationsService) {
    super(crudOp, "http://localhost:3000/api/news");
  }
}
