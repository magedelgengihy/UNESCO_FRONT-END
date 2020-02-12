import { CrudOperationsService } from './../services/crud-operations.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  baseURL="http://localhost:3000/api/countries";

  country: any = {
    name: "", iso: "", states: []
  }
  id: string;
  statesStringValue ;
  states:any[];
  getCountry() {

  }
  constructor(
    private crudService: CrudOperationsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    
    this.crudService.getById(this.baseURL,this.id)
      .subscribe(
        res => {
          console.log(res);
          this.country = res;
          this.states = this.country.states;
          this.statesStringValue = this.country.states.toString();
        },
        err => {
          console.log(err);
        });
  }

  updateSubmit(fUpdate) { 
    console.log(fUpdate.value);
    this.crudService.update(this.baseURL,this.id, fUpdate.value)
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      });
  }

  onWriting(textArea, fUpdate){
    this.states = textArea.value.split(',');
    
  }
}
