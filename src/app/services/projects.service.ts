import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  //private apiUrlProd = 'https://api.pro.isbndb.com';
  private apiUrlMock = "http://localhost:3000/projects";

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrlMock)
  }

  newProject(project_data: any): Observable<any> {
    return this.http.post(this.apiUrlMock, project_data);
  }

  updateProject(project_data: any): Observable<any> {
    return this.http.put(this.apiUrlMock, project_data);
  }

  getProject(projectId : any): Observable<any> {
    const url = this.apiUrlMock + `/${projectId}`;
    return this.http.get(url);
  }

  deleteProject(projectId : any): Observable<any> {
    const url = this.apiUrlMock + `/${projectId}`;
    return this.http.delete<any>(url);
  }
}
