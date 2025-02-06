import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {
  //private apiUrlProd = 'https://api.pro.isbndb.com';
  private apiUrlMock = "http://localhost:3000/work-experiences";

  constructor(private http: HttpClient) { }

  getWorks(): Observable<any> {
    return this.http.get(this.apiUrlMock)
  }

  newWork(work_data: any): Observable<any> {
    return this.http.post(this.apiUrlMock, work_data);
  }

  updateWork(work_data: any): Observable<any> {
    return this.http.put(this.apiUrlMock, work_data);
  }

  getWork(workId : any): Observable<any> {
    const url = this.apiUrlMock + `/${workId}`;
    return this.http.get(url);
  }

  deleteWork(workId : any): Observable<any> {
    const url = this.apiUrlMock + `/${workId}`;
    return this.http.delete<any>(url);
  }
}
