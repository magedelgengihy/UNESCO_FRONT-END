import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNewsInHome(deptClickedFromSideBar: boolean, deptId: string, page: number, perpage: number) {    
    if (!deptClickedFromSideBar && deptId == null) {
      return this.http.get('http://localhost:3000/api/news?page=' + page + '&perpage=' + perpage);
    }
    else {
      return this.http.get('http://localhost:3000/api/departments/' + deptId + '/news?page=' + page + '&perpage=' + perpage)
    }
  }
  
  getAllNewsInDeptPage(deptId: string, page: number, perpage: number) {    
    return this.http.get('http://localhost:3000/api/departments/' + deptId + '/news?page=' + page + '&perpage=' + perpage)
  }
  
  newsDetails;
  goToNewsDetailFromReadMore(news){
    this.newsDetails = news;
  }

  getNewsDetails() {    
    return this.newsDetails;
  }
}
