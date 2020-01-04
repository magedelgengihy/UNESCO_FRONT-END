import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumsService {

  constructor(private http: HttpClient) { }

  getPhotoAlbums(deptClickedFromSideBar: boolean, deptId: string, page: number) {

    if (!deptClickedFromSideBar && deptId == null) {
      return this.http.get('http://localhost:3000/api/photoalbums?page=' + page);
    }
    else {
      return this.http.get('http://localhost:3000/api/departments/' + deptId + '/photoalbums?page=' + page)
    }
  }

}
