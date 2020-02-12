import { CrudOperationsService } from './../services/crud-operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {
  baseURL = "http://localhost:3000/api/countries";
  constructor(private crudService: CrudOperationsService) { }

  ngOnInit() {
  }

  createSubmit(fCreate) {
        console.log(fCreate);
        this.crudService.create(this.baseURL, fCreate.value)
            .subscribe(
                res => {
                    console.log(res);
                }
                , err => {
                    console.log(err);
                });
    }

    onWriting(textArea, fcreate) {
      fcreate.value.states = textArea.value.split(',');
    }
}
