import { ActivatedRoute } from '@angular/router';
import { CrudOperationsService } from './../services/crud-operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  baseURL = "http://localhost:3000/api/users";
  countriesURL = "http://localhost:3000/api/countries";

  
  user: any = {
    birthDate:"",
    //job:""
  };
  id: any;

  roles = [
    { _id: '12568', name: "user", value: "user" },
    { _id: '12569', name: "admin", value: "admin" },
  ];

  defaultIsVerified = true;
  defaultGender = 'male';
  // get by on init
  countries: any = [
    { _id: '0', name: "example", iso: "AAA", states: ["a", "b", "c"] },
  ];

  country= this.countries[0];
  states= this.country.states;
  state= this.states[0];


  constructor(
    private crud: CrudOperationsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });

    this.crud.getById(this.baseURL, this.id)
      .subscribe(
        res => {
          this.user = res;
          this.getCountries();
        },
        err => {
          console.log(err);
        });

  //this.getCountries()
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

  getCountries() {
    this.crud.getAll(this.countriesURL)
      .subscribe(res => {

         this.countries=res;
        const userCountry= this.countries.filter(
          co => co.name === this.user.address.country
        );

        this.country = userCountry[0];
        this.states = this.country.states;
        this.state = this.user.address.city;
        console.log(this.country, this.state);
      },
        err => {
          console.log(err);
        });
  }

  updateSubmit(fUpdate){
    const address = {
      country: this.country.name,
      city: this.state
    }

    fUpdate.value.address = address;
    console.log(fUpdate.value);

    this.crud.update(this.baseURL, this.id, fUpdate.value)
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      });
  } 
}
