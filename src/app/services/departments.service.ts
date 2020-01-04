import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(public http: HttpClient, public router: Router) { }

  getAllDepartments() {    
    return this.http.get('http://localhost:3000/api/departments');
  }

  getDepartmentById(id){
    return this.http.get('http://localhost:3000/api/departments/' + id);
  }

}
