import { CrudOperationsService } from './../services/crud-operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  baseURL = "http://localhost:3000/api/users";
  countriesURL = 'http://localhost:3000/api/countries';
  roles = [
    { _id: '12568', name: "user", value: "user" },
    { _id: '12569', name: "admin", value: "admin" },
  ];

  defaultIsVerified = true;
  defaultGender = 'male';
  defaultPhone = "01x 1234 1234";
  defaultJob = "none";
  defaultDate = "1991-01-01";
  // get by on init
  countries:any = [
    {_id:'0', name:"example", iso:"AAA",states:["a","b","c"]},
  ];

  country= this.countries[0];
  states = this.country.states;
  state= this.states[0];
  constructor(private crud: CrudOperationsService) { }

  ngOnInit() {

    this.crud.getAll(this.countriesURL)
      .subscribe(res => {
        this.countries = res
        this.country = this.countries[0];
        this.states = this.country.states;
        this.state = this.states[0];
      },
        err => {
          console.log(err);
        });
    
  }

  createSubmit(fcreate) {
    const address = { country: this.country.name, city: this.state }
    fcreate.value.address = address;
    //console.log(fcreate);
    this.crud.create(this.baseURL, fcreate.value)
    .subscribe(
      res=>{
        console.log(res);
      }
      ,err=>{
        console.log(err);
      }
    )
  }

  countryChanges(e) {
    const countryId = e.target.value;
    this.country = this.countries.filter(el => el._id === countryId)[0];
    //console.log(this.country);
    this.states = this.country.states;
    this.state = this.states[0];
  }

  cityChanges(e) {
    this.state = e.target.value;
  }

  log(mes) {
    console.log(mes);
  }
}
