import { BaseTable } from './../common/base-table';
import { Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent  extends BaseTable {

  constructor() {  
    super(new EventEmitter());
  }
  
}
