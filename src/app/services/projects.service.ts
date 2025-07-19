import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project } from '../models/project.model';
import { ApiResponse } from '../models/api-response.model';

const apiBasePath = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  /**
   * Injects the HttpClient service for making HTTP requests.
   * @private
   */
  readonly #http = inject(HttpClient);

  /**
   * Retrieves all projects.
   * @returns An Observable containing the list of projects.
   */
  getProjects(): Observable<Project[]> {
    const url = `${apiBasePath}/projects`;
    console.log('Fetching projects from:', url);
    return this.#http.get<ApiResponse<Project[]>>(url).pipe(
      map(response => response.data)
    );
  }

  /**
   * Retrieves a specific project by its ID.
   * @param projectId - The ID of the project to retrieve.
   * @returns An Observable containing the project details.
   */
  getProject(projectId : number): Observable<Project> {
    const url = `${apiBasePath}/${projectId}`;
    return this.#http.get<ApiResponse<Project>>(url).pipe(
      map(response => response.data)
    );
  }
}
