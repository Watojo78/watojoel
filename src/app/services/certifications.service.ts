import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {
  //private apiUrlProd = 'https://api.pro.isbndb.com';
  private apiUrlMock = "http://localhost:3000/certifications";

  constructor(private http: HttpClient) { }

  getCertifications(): Observable<any> {
    return this.http.get(this.apiUrlMock)
  }

  newCertification(certification_data: any): Observable<any> {
    return this.http.post(this.apiUrlMock, certification_data);
  }

  updateCertification(certification_data: any): Observable<any> {
    return this.http.put(this.apiUrlMock, certification_data);
  }

  getCertification(certificationId : any): Observable<any> {
    const url = this.apiUrlMock + `/${certificationId}`;
    return this.http.get(url);
  }

  deleteCertification(certificationId : any): Observable<any> {
    const url = this.apiUrlMock + `/${certificationId}`;
    return this.http.delete<any>(url);
  }
}
