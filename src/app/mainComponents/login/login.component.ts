import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { UserService } from '../../services/user.service';
import { from } from 'rxjs';

import { HeaderComponent } from '../header/header.component'
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HeaderComponent, NavBarComponent]
})

export class LoginComponent implements OnInit {
  constructor(public userService: UserService,
     public router: Router,
      private headerComponent: HeaderComponent,
      private navBarComponent: NavBarComponent) { }

  model = {
    email: '',
    password: ''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  verificationMessage: boolean;
  userDetails;
  appearLoginForm: boolean = true;
  appearForgetPassFormOne: boolean = false;
  appearForgetPassFormTwo: boolean = false;
  showErrorMessage = false;

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }

    this.model = {
      email: '',
      password: ''
    };

  }


  login(form) {
    
    //make login function from user service
    this.userService.login(form.value).subscribe(
      res => {

        console.log(res);

        this.userService.setTokenInLocalStorage(res['token']);
        this.userService.setUserInLocalStorage(res['user']);
        this.resetForm(form);

        if (this.userService.isLoggedIn()){     
          this.headerComponent.ngDoCheck();
          this.navBarComponent.ngDoCheck();
        }
        this.router.navigateByUrl('/home');

      },
      err => {
        this.showErrorMessage = false;

        this.serverErrorMessages = err.error.message;
        setTimeout(() => this.showErrorMessage = true, 6000);
      }
    );

  }

  resetForm(form) {
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
    form.resetForm();
    this.serverErrorMessages = '';
  }


}
