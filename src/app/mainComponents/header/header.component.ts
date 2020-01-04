import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NavBarComponent]
})

export class HeaderComponent implements OnInit {
  isUser = false;
  fullName;


  constructor(private navBarComponent: NavBarComponent,
    private translate: TranslateService,
    public userService: UserService) {
    translate.setDefaultLang('en');

  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  onSwitchLanguage() {
    console.log("Hello");
  }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.isUser = true;
      this.fullName = (JSON.parse(localStorage.getItem('user')).firstName) + ' ' + (JSON.parse(localStorage.getItem('user')).lastName)
    }

  }

  public ngDoCheck() {
    if (this.userService.isLoggedIn()) {
      this.isUser = true;
      this.fullName = (JSON.parse(localStorage.getItem('user')).firstName) + ' ' + (JSON.parse(localStorage.getItem('user')).lastName)
    }
  }

  logout() {
    this.userService.deleteToken();
    this.userService.deleteUserFromLocalStorage();
    this.isUser = false;
    this.navBarComponent.ngDoCheck();
  }
}
