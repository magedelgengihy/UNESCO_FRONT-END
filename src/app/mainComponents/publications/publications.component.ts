import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor(private publicationsService: PublicationsService) { }

  allPublications: any;
  page = 1;
  perpage = 4;
  numOfPages;
  previousState;
  nextState;
  publicationJSON;
  pubNameEn;

  ngOnInit() {

    this.publicationsService.getAllPublications(this.page, this.perpage).subscribe(
      (res) => {
        console.log(res);
        this.previousState = false;
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);

        this.nextState = resJSON.pagination.nextState;
        this.previousState = resJSON.pagination.previousState;
        this.allPublications = resJSON.data;
        this.numOfPages = resJSON.pagination.numberOfPages;
        console.log(this.allPublications);
        console.log(resJSON.pagination.numberOfPages);

        if (resJSON.pagination.numberOfPages > 1) {
          this.nextState = true;
        }
        else {
          this.nextState = false;
        }
      },

      (err) => { console.log(err); }
    );
  }


  goToNextPage() {

    this.page += 1;
    this.publicationsService.getAllPublications(this.page, this.perpage).subscribe(
      res => {
        console.log(res);
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);

        this.nextState = resJSON.pagination.nextState;
        this.previousState = resJSON.pagination.previousState;
        this.allPublications = resJSON.data;

        console.log(resJSON.pagination.numberOfPages);
      },
      err => {
        console.log(err);
      }
    );

  }

  goToPreviousPage() {

    this.page -= 1;
    this.publicationsService.getAllPublications(this.page, this.perpage).subscribe(
      res => {
        console.log(res);
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);

        this.nextState = resJSON.pagination.nextState;
        this.previousState = resJSON.pagination.previousState;
        this.allPublications = resJSON.data;

        console.log(resJSON.pagination.numberOfPages);
      },
      err => {
        console.log(err);
      }
    );

  }

  
  goToPublicationDetails(publication) {
    let resSTR = JSON.stringify(publication);
    let resJSON = JSON.parse(resSTR);
    this.publicationJSON = resJSON;
    this.publicationsService.goToPublicationDetailFromReadMore(this.publicationJSON);
  }


}
