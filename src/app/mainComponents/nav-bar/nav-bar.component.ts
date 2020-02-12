import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DepartmentsService } from '../../services/departments.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(public departmentService: DepartmentsService, public userService: UserService, public router: Router) {

  }

  deptData;
  deptNames;
  deptId;
  isAdmin = false;
  roleState;

  ngOnInit() {
    this.departmentService.getAllDepartments().subscribe(
      res => {
        this.deptData = res;
        this.deptNames = this.deptData.map(({ nameEn }) => nameEn)
      },
      err => {
        console.log(err);
      }
    );


    if (this.userService.isLoggedIn()) {
      this.roleState = JSON.parse(localStorage.getItem('user')).role;
      console.log(this.roleState);

      if (this.roleState == 'admin') {
        this.isAdmin = true;
      }
    }
  }


  public ngDoCheck() {
    if (this.userService.isLoggedIn()) {
      this.roleState = JSON.parse(localStorage.getItem('user')).role;
      if (this.roleState == 'admin') {
        this.isAdmin = true;
      }
    }
    else {
      this.isAdmin = false;
    }
  }

  clearLocalStorage() {
    ////////// delete any Saved publication-details or news-details in local storage /////////
    localStorage.removeItem('publicationNameEn');
    localStorage.removeItem('publicationDate');
    localStorage.removeItem('publicationImage');
    localStorage.removeItem('publicationLongDisc');
    localStorage.removeItem('publicationDocuments');

    localStorage.removeItem('newsNameEn');
    localStorage.removeItem('newsDate');
    localStorage.removeItem('newsImage');
    localStorage.removeItem('newsLongDisc');
    localStorage.removeItem('newsDocuments');
  }

  

}


