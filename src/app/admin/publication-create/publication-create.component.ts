import { CrudOperationsService } from './../services/crud-operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-create',
  templateUrl: './publication-create.component.html',
  styleUrls: ['./publication-create.component.css']
})
export class PublicationCreateComponent implements OnInit {

  baseURL = "http://localhost:3000/api/publications";
  documents = [];


  constructor(private crudService: CrudOperationsService) { }

  ngOnInit() {
  }

  createSubmit(fCreate) {
    
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
}
