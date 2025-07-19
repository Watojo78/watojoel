import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { WorkExperience } from '../models/work-experience.model';
import { ApiResponse } from '../models/api-response.model';

const apiBasePath = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {
  /**
   * Injects the HttpClient service for making HTTP requests.
   * @private
   */
  readonly #http = inject(HttpClient);

  /**
   * Fetches all work experiences.
   * @returns An Observable containing an array of work experiences.
   */
  getWorks(): Observable<WorkExperience[]> {
    const url = `${apiBasePath}/work_experiences`;
    console.log('Fetching work experiences from:', url);
    return this.#http.get<ApiResponse<WorkExperience[]>>(url).pipe(
      map(response => response.data)
    );
  }

  /**
   * Fetches a specific work experience by its ID.
   * @param id - The ID of the work experience to fetch.
   * @returns An Observable containing the work experience data.
   */
  getWork(id : number): Observable<WorkExperience> {
    const url = `${apiBasePath}/${id}`;
    return this.#http.get<ApiResponse<WorkExperience>>(url).pipe(
      map(response => response.data)
    );
  }
}
