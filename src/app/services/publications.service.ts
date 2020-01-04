import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(private httpClient: HttpClient) { }

  getAllPublications(page: number, perpage: number) {
    return this.httpClient.get('http://localhost:3000/api/publications?page=' + page + '&perpage=' + perpage );
  }

  publicationDetails;
  goToPublicationDetailFromReadMore(publication){
    this.publicationDetails = publication;
  }

  getPublicationDetails() {    
    return this.publicationDetails;
  }
}
