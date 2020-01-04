import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  model = {
    email: ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  showErrorMessage = false;


  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    console.log(form.value);
    this.userService.sendEmailForgetPassword(form.value).subscribe(
      res => {      
        console.log(res);
        this.resetForm(form);
        this.router.navigate(['/Change-Password']);
      },
      err => {
        this.showErrorMessage = false;
        console.log(err);
        
        this.serverErrorMessages = err.error.message;
        setTimeout(() => this.showErrorMessage = true, 6000);

      }
    );

  }


  resetForm(form: NgForm) {
    // this.userService.selectedUser = {
    //   firstName: '',
    //   email: '',
    //   password: '',
    //   isVerified: false,
    //   role: 'user'
    // };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}