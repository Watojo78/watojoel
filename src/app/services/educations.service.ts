import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Education } from '../models/education.model';
import { ApiResponse } from '../models/api-response.model';

const apiBasePath = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EducationsService {
  /**
   * Injects the HttpClient service for making HTTP requests.
   * @private
   */
  readonly #http = inject(HttpClient);

  /**
   * Retrieves all educations.
   * @returns An Observable containing the list of educations.
   */
  getEducations(): Observable<Education[]> {
    const url = `${apiBasePath}/educations`;
    return this.#http.get<ApiResponse<Education[]>>(url).pipe(
      map(response => response.data)
    );
  }

  /**
   * Retrieves a specific education by its ID.
   * @param id - The ID of the education to retrieve.
   * @returns An Observable containing the education details.
   */
  getEducation(id : number): Observable<Education> {
    const url = `${apiBasePath}/${id}`;
    return this.#http.get<ApiResponse<Education>>(url).pipe(
      map(response => response.data)
    );
  }
}
