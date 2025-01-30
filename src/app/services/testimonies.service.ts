import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {
  private apiUrlProd = 'https://api.pro.isbndb.com';
  private apiUrlMock = "http://localhost:3000/testimonies";

  constructor(private http: HttpClient) { }

  getTestimonies(): Observable<any> {
    return this.http.get(this.apiUrlMock)
  }

  newTestimony(testimony_data: any): Observable<any> {
    return this.http.post(this.apiUrlMock, testimony_data);
  }

  updateTestimony(testimony_data: any): Observable<any> {
    return this.http.put(this.apiUrlMock, testimony_data);
  }

  getTestimony(testimonyId : any): Observable<any> {
    const url = this.apiUrlMock + `/${testimonyId}`;
    return this.http.get(url);
  }

  deleteTestimony(testimonyId : any): Observable<any> {
    const url = this.apiUrlMock + `/${testimonyId}`;
    return this.http.delete<any>(url);
  }
}
