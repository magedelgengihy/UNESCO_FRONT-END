import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatButton } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from 'src/app/services/departments.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component'
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
  providers: [NavBarComponent]
})
export class DepartmentDetailsComponent implements OnInit {

  panelOpenState = false;
  showPagination;

  accordionList: any;

  @ViewChild('accordion', { static: true }) Accordion: MatAccordion;

  constructor(public newsService: NewsService, public myActivatedRoute: ActivatedRoute, public departmentsService: DepartmentsService) { }

  oldDeptId;
  newDeptId;
  page = 1;
  perpage = 6;
  allNews;
  numOfPages;
  nextState;
  newsJSON;

  ngOnInit() {
    console.log(this.myActivatedRoute.snapshot.params["id"]);
    this.newDeptId = this.myActivatedRoute.snapshot.params["id"];
    this.getDepartmentById(this.newDeptId);
    this.oldDeptId = this.newDeptId;

    ////////////////// get latest news //////////////    
    this.newsService.getAllNewsInDeptPage(this.newDeptId, this.page, this.perpage).subscribe(
      res => {
        //this.previousState = false;
        console.log(res);
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);
        this.allNews = resJSON.data;
        console.log(this.allNews);
        this.showPagination = true;

        this.numOfPages = resJSON.pagination.numberOfPages;
        if (resJSON.pagination.numberOfPages > 1) {
          this.nextState = true;
        }
        else {
          this.nextState = false;
        }
        console.log(resJSON.pagination.numberOfPages);

      },
      err => {
        console.log(err);
      }
    );
  }

  getNewsByDeptId(id) {

  }


  ngDoCheck() {
    this.newDeptId = this.myActivatedRoute.snapshot.params["id"];
    if (this.oldDeptId != this.newDeptId) {
      
      this.getDepartmentById(this.newDeptId);

      ////////////////// get latest news //////////////    
      this.newsService.getAllNewsInDeptPage(this.newDeptId, this.page, this.perpage).subscribe(
        res => {
          console.log(res);
          let resSTR = JSON.stringify(res);
          let resJSON = JSON.parse(resSTR);
          this.allNews = resJSON.data;
          console.log(this.allNews);
          this.showPagination = true;

          this.numOfPages = resJSON.pagination.numberOfPages;
          if (resJSON.pagination.numberOfPages > 1) {
            this.nextState = true;
          }
          else {
            this.nextState = false;
          }
          console.log(resJSON.pagination.numberOfPages);

        },
        err => {
          console.log(err);
        }
      );

      // make this to stop ngDoCheck //
      this.oldDeptId = this.newDeptId;
    }
  }

  departmentDetails;
  deptName;
  deptDiscriptionEn;
  deptSubDepartments;
  previousState;

  getDepartmentById(id) {
    this.departmentsService.getDepartmentById(id).subscribe(
      (response) => {
        this.departmentDetails = response;
        this.deptName = this.departmentDetails.nameEn;
        this.deptDiscriptionEn = this.departmentDetails.descriptionEn;
        this.deptSubDepartments = this.departmentDetails.subdepartments;        
        console.log(this.departmentDetails);
      },
      (err) => { console.log(err); }
    );
  }

  goToNextPage() {

    this.page += 1;
    this.newsService.getAllNewsInDeptPage(this.newDeptId, this.page, this.perpage).subscribe(
      res => {
        console.log(res);
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);

        this.nextState = resJSON.pagination.nextState;
        this.previousState = resJSON.pagination.previousState;
        this.allNews = resJSON.data;

        console.log(resJSON.pagination.numberOfPages);
      },
      err => {
        console.log(err);
      }
    );

  }

  goToPreviousPage() {

    this.page -= 1;
    this.newsService.getAllNewsInDeptPage(this.newDeptId, this.page, this.perpage).subscribe(
      res => {
        console.log(res);
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);

        this.nextState = resJSON.pagination.nextState;
        this.previousState = resJSON.pagination.previousState;
        this.allNews = resJSON.data;

        console.log(resJSON.pagination.numberOfPages);
      },
      err => {
        console.log(err);
      }
    );
  }

  goToNewsDetails(news) {
    let resSTR = JSON.stringify(news);
    let resJSON = JSON.parse(resSTR);
    this.newsJSON = resJSON;
    this.newsService.goToNewsDetailFromReadMore(this.newsJSON);
  }

}
