import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  constructor(public newsService: NewsService) { }

  newsDetails;
  newsNameEn;
  newsDate;
  newsImage;
  newsLongDisc;
  newsDocuments;

  ngOnInit() {

    this.newsDetails = this.newsService.getNewsDetails();

    //check if details page is opened for first time or by reload/refresh
    if (this.newsDetails != null) {
      this.newsNameEn = this.newsDetails.nameEn;
      this.newsDate = this.newsDetails.date;
      this.newsImage = this.newsDetails.image;
      this.newsLongDisc = this.newsDetails.descriptionLongEn;
      this.newsDocuments = this.newsDetails.documents;

      //if opened for first time then store used publication data in local storage to retrieve if page will be refreshed
      localStorage.setItem('newsNameEn', this.newsNameEn);
      localStorage.setItem('newsDate', this.newsDate);
      localStorage.setItem('newsImage', this.newsImage);
      localStorage.setItem('newsLongDisc', this.newsLongDisc);
      localStorage["newsDocuments"] = JSON.stringify(this.newsDocuments); //store array of strings

    }
    /// in case of reload/refresh that publicationDetails will be undefined from function in service
    else {
      this.newsNameEn = localStorage.getItem('newsNameEn');
      this.newsDate = localStorage.getItem('newsDate');
      this.newsImage = localStorage.getItem('newsImage');
      this.newsLongDisc = localStorage.getItem('newsLongDisc');
      this.newsDocuments = JSON.parse(localStorage["newsDocuments"]);

    }

  }

  clearLocalStorage() {
    localStorage.removeItem('newsNameEn');
    localStorage.removeItem('newsDate');
    localStorage.removeItem('newsImage');
    localStorage.removeItem('newsLongDisc');
    localStorage.removeItem('newsDocuments');
  }

}
