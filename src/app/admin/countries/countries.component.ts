import { BaseComponentView } from './../common/base-component-view';
import { Component } from '@angular/core';
import { CrudOperationsService } from '../services/crud-operations.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent  extends BaseComponentView {
  constructor(private crudOP: CrudOperationsService){
    super(crudOP, "http://localhost:3000/api/countries");
  }
}
