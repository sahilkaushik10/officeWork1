import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class View3Service {
  constructor(private http: HttpClient) { }

  getView3Data() {
    return this.http.get('http://localhost:8000/view3');
  }
}
