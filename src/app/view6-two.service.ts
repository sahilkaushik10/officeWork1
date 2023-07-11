import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class View6TwoService {

  constructor(private http: HttpClient) { }

  getView6TwoData() {
    return this.http.get('http://localhost:8000/view6Two');
  }
}