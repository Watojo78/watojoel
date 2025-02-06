import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {
  //private apiUrlProd = 'https://api.pro.isbndb.com';
  private apiUrlMock = "http://localhost:3000/educations";

  constructor(private http: HttpClient) { }

  getEducations(): Observable<any> {
    return this.http.get(this.apiUrlMock)
  }

  newEducation(education_data: any): Observable<any> {
    return this.http.post(this.apiUrlMock, education_data);
  }

  updateEducation(education_data: any): Observable<any> {
    return this.http.put(this.apiUrlMock, education_data);
  }

  getEducation(educationId : any): Observable<any> {
    const url = this.apiUrlMock + `/${educationId}`;
    return this.http.get(url);
  }

  deleteEducation(educationId : any): Observable<any> {
    const url = this.apiUrlMock + `/${educationId}`;
    return this.http.delete<any>(url);
  }
}
