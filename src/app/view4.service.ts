import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class View4Service {
  constructor(private http: HttpClient) { }

  getView4Data() {
    return this.http.get('http://localhost:8000/view4');
  }
}
