import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  model = {
    token: '',
    newPassword: ''
  };
  serverErrorMessages: string;
  showSucessMessage: boolean;
  showErrorMessage = false;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    this.userService.sendCodeAndPassword(form.value).subscribe(
      res => {
        console.log(res);
        this.resetForm(form);
        this.showSucessMessage = true;
        //show success message with 7000 ms timer then navigate to login page again
        setTimeout(() => {this.showSucessMessage = false; this.router.navigate(['/login']);}, 7000);       
      },
      err => {
        this.showErrorMessage = false;

        console.log(err);
        this.serverErrorMessages = err.error;        
        setTimeout(() => this.showErrorMessage = true, 7000);

      }
    );

  }

  resetForm(form: NgForm) {
    this.userService.tokenAndNewPassword = {
      token: '',
      newPassword: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
