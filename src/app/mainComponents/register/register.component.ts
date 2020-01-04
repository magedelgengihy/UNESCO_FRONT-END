import { UserService } from 'src/app/services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  verificationMessage: boolean = false;
  constructor(public userService: UserService) { }


  signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phone: new FormControl(''),
    job: new FormControl(''),
    birthDate: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl('')
    })
  })

  get f() { return this.signUpForm.controls; }

  ngOnInit() {

  }

  submitted = false;
  onSubmit(form: NgForm) {
    this.submitted = true;

    if(this.signUpForm.invalid){
      return;
    }

    console.log(form.value);
    var filteredFormObj = form.value;    //filter form fileds from null and empty fields 
    Object.keys(filteredFormObj).forEach((key) => (filteredFormObj[key] == "" || filteredFormObj[key] == null) && delete filteredFormObj[key]);

    if (filteredFormObj.address.city == "" || filteredFormObj.address.city == null) {
      delete filteredFormObj.address.city;
    }
    if (filteredFormObj.address.country == "" || filteredFormObj.address.country == null) {
      delete filteredFormObj.address.country;
    }

    console.log(filteredFormObj);


    this.userService.postUser(filteredFormObj).subscribe(
      res => {
        console.log(res);
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.signUpForm.reset();
        this.resetForm(form);
        this.verificationMessage = true;
        setTimeout(() => this.showSucessMessage = false, 600000);
        this.submitted= false;
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.message;
          console.log(err.error.message);
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }


  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      job: '',
      gender: '',
      birthDate: '',
      address: {
        country: '',
        city: ''
      },
      isVerified: false, // or put it empty and assign it in backEnd ?
      role: 'user'  // or put it empty and assign it in backEnd ?
    };
    //this.firstName 
    //form.resetForm();
    this.serverErrorMessages = '';
  }



}
