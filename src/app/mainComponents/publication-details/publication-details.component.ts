import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {

  constructor(public publicationsService: PublicationsService) { }

  publicationDetails;
  publicationNameEn;
  publicationDate;
  publicationImage;
  publicationLongDisc;
  publicationDocuments;

  ngOnInit() {

    this.publicationDetails = this.publicationsService.getPublicationDetails();

    //check if details page is opened for first time or by reload/refresh
    if (this.publicationDetails != null) {
      this.publicationNameEn = this.publicationDetails.nameEn;
      this.publicationDate = this.publicationDetails.date;
      this.publicationImage = this.publicationDetails.image;
      this.publicationLongDisc = this.publicationDetails.descriptionLongEn;
      this.publicationDocuments = this.publicationDetails.documents;

      //if opened for first time then store used publication data in local storage to retrieve if page will be refreshed
      localStorage.setItem('publicationNameEn', this.publicationNameEn);
      localStorage.setItem('publicationDate', this.publicationDate);
      localStorage.setItem('publicationImage', this.publicationImage);
      localStorage.setItem('publicationLongDisc', this.publicationLongDisc);
      localStorage["publicationDocuments"] = JSON.stringify(this.publicationDocuments); //store array of strings

    }
    /// in case of reload/refresh that publicationDetails will be undefined from function in service
    else {
      this.publicationNameEn = localStorage.getItem('publicationNameEn');
      this.publicationDate = localStorage.getItem('publicationDate');
      this.publicationImage = localStorage.getItem('publicationImage');
      this.publicationLongDisc = localStorage.getItem('publicationLongDisc');
      this.publicationDocuments = JSON.parse(localStorage["publicationDocuments"]);

    }

  }

  clearLocalStorage() {
    localStorage.removeItem('publicationNameEn');
    localStorage.removeItem('publicationDate');
    localStorage.removeItem('publicationImage');
    localStorage.removeItem('publicationLongDisc');
    localStorage.removeItem('publicationDocuments');
  }

}
