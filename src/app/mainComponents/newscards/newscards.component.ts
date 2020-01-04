import { Component, OnChanges, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { from } from 'rxjs';
import { DepartmentsService } from 'src/app/services/departments.service';


@Component({
  selector: 'app-newscards',
  templateUrl: './newscards.component.html',
  styleUrls: ['./newscards.component.css']
  // providers: []
})
export class NewscardsComponent implements OnChanges {

  constructor(public newsService: NewsService, public departmentService: DepartmentsService) { }

  data;
  deptNames;
  deptClickedFromSideBar = false;
  titleOfNews;
  page = 1;
  perpage = 6;
  numOfPages;
  previousState;
  nextState;
  deptID = null;
  allNews;
  deptData;
  deptIDs;
  newsJSON;
  showPagination = false;

  ngOnInit() {

    this.deptClickedFromSideBar = false;
    this.titleOfNews = "Committee departments";

    /////// get Departments to show thier names in side bar ///////////
    this.departmentService.getAllDepartments().subscribe(
      res => {
        this.deptData = res;
        console.log(res);
        this.deptNames = this.deptData.map(({ nameEn }) => nameEn)
        console.log(this.deptNames);
        this.deptIDs = this.deptData.map(function (a) { return a["_id"]; });
        console.log(this.deptIDs);
      },
      err => {
        console.log(err);
      }
    );

    ////////////////// get latestnews for all departments //////////////    
    this.newsService.getAllNewsInHome(this.deptClickedFromSideBar, this.deptID, this.page, this.perpage).subscribe(
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

  ngOnChanges() {
  }


  goToNextPage() {

    this.page += 1;
    this.newsService.getAllNewsInHome(this.deptClickedFromSideBar, this.deptID, this.page, this.perpage).subscribe(
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
    this.newsService.getAllNewsInHome(this.deptClickedFromSideBar, this.deptID, this.page, this.perpage).subscribe(
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

  getNewsByDeptID(deptID) {

    this.deptClickedFromSideBar = true;
    this.deptID = deptID;
    this.page = 1;
    this.newsService.getAllNewsInHome(this.deptClickedFromSideBar, this.deptID, this.page, this.perpage).subscribe(
      res => {
        console.log(res);
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);
        this.nextState = resJSON.pagination.nextState;
        this.previousState = resJSON.pagination.previousState;
        this.numOfPages = resJSON.pagination.numberOfPages;

        if (resJSON.data.length) {
          this.allNews = resJSON.data;
          console.log(this.allNews);
          this.showPagination = true;

        }
        else {
          this.allNews = null;
          this.showPagination = false;

        }
        console.log(resJSON.pagination.numberOfPages);
      },
      err => {
        console.log(err);
      }
    );

  }


  /////////////////get dept. name to change title of news for each clicked dept.////////
  putDeptNameInTitle(deptName) {
    this.titleOfNews = deptName;
  }

  goToNewsDetails(news) {
    let resSTR = JSON.stringify(news);
    let resJSON = JSON.parse(resSTR);
    this.newsJSON = resJSON;
    this.newsService.goToNewsDetailFromReadMore(this.newsJSON);
  }



}
