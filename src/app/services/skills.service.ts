import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  //private apiUrlProd = 'https://api.pro.isbndb.com';
  private apiUrlMock = "http://localhost:3000/skills";

  constructor(private http: HttpClient) { }

  getSkills(): Observable<any> {
    return this.http.get(this.apiUrlMock)
  }

  newSkill(skill_data: any): Observable<any> {
    return this.http.post(this.apiUrlMock, skill_data);
  }

  updateSkill(skill_data: any): Observable<any> {
    return this.http.put(this.apiUrlMock, skill_data);
  }

  getSkill(skillId : any): Observable<any> {
    const url = this.apiUrlMock + `/${skillId}`;
    return this.http.get(url);
  }

  deleteSkill(skillId : any): Observable<any> {
    const url = this.apiUrlMock + `/${skillId}`;
    return this.http.delete<any>(url);
  }
}
