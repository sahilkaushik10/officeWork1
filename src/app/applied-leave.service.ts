import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppliedLeaveService {
  

  _url = 'http://localhost:8000/leave-applications';
  constructor(private http: HttpClient)
  {}
  
  employees()
  {
    return this.http.get(this._url);
  }
}
