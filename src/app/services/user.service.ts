import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

import { User } from '../models/user.model';
import { TokenAndNewPass } from '../models/token-and-new-pass.model';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(public http: HttpClient, public router: Router) { }

  selectedUser: User = {
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

  tokenAndNewPassword: TokenAndNewPass = {
    token: '',
    newPassword: ''
  }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  postUser(user: User) {
    console.log(user);
    return this.http.post('http://localhost:3000/api/users/signup', user, this.noAuthHeader);   //returning observable
  }


  login(authCredentials) {
    return this.http.post('http://localhost:3000/api/users/login', authCredentials, this.noAuthHeader); //returning observable
  }

  sendEmailForgetPassword(email) {
    return this.http.post('http://localhost:3000/api/users/forgot-password', email);
  }
  getUserProfile() {
    return this.http.get('http://localhost:3000/api/users/login');
  }

  sendCodeAndPassword(tokenAndNewPass: TokenAndNewPass) {
    console.log(tokenAndNewPass);

    return this.http.post('http://localhost:3000/api/users/verify-new-password', tokenAndNewPass);
  }


  //Helper Methods

  setTokenInLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  setUserInLocalStorage(user: string) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  setRoleInLocalStorage(role: string) {
    localStorage.setItem('role', role);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserFromLocalStorage() {
    
    return localStorage.getItem('user')
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  deleteUserFromLocalStorage() {
    localStorage.removeItem('user');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }


}
