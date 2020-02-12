import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CrudOperationsService {

  constructor(private http: HttpClient) { }
  getAll(baseURL) {
    console.log('get all get called \n', baseURL);
    return this.http.get(baseURL);
  }

  getAllPaginated(baseURL, page = 1, perPage = 10) {

    const URL = baseURL + `?page=${page}&perpage=${perPage}`;
    console.log('url: ', URL);
    return this.http.get(URL);
  }

  getBy(baseURL, byWhatQueryString) {
    console.log('getBy get called');
    const url = baseURL+'?'+byWhatQueryString;
    return this.http.get(url);
  }

  getById(baseURL, id) {
    console.log('getById get called');
    const URL = `${baseURL}/${id}`;
    return this.http.get(URL);
  }

  delete(baseURL, id) {
    console.log('delete get called');
    const URL = `${baseURL}/${id}`;
    return this.http.delete(URL);
  }

  update(baseURL, id, data) {
    console.log('update get called');
    const URL = `${baseURL}/${id}`;
    return this.http.put(URL, data);
  }

  create(baseURL, data) {
    console.log('create get called');
    return this.http.post(baseURL, data);
  }
}
