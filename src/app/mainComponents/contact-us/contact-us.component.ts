import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public contactService: ContactUsService) { }

  ngOnInit() {
  }

  
  contactUsObj: object = <any> {};
  isSent: boolean = false;

  addNewContact(contact, contactForm) {
    
    this.contactUsObj = {
      "first_name": contact.first_name,
      "last_name": contact.last_name,
      "email": contact.email,
      "phone_number": contact.phone,
      "select": contact.select,
      "message": contact.message
    }
    this.contactService.storeContact(this.contactUsObj).subscribe(
      (response) => {
        this.isSent = true;
        console.log(response);
      },
      (err) => { console.log(err); }
    );

    contactForm.resetForm();
  }
}
