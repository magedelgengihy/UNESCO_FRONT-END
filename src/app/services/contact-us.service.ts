import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEcontactUs } from '../contact_us_messages';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private httpClient: HttpClient) { }

  baseURL = "http://localhost:3100/contact_us_messages";

  storeContact(contact){
    return this.httpClient.post<any>(this.baseURL,contact);
  }

}
