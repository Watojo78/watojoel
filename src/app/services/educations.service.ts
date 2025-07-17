import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
  getEducations(): Observable<any> {
    const url = `${apiBasePath}/educations`;
    return this.#http.get(url);
  }

  /**
   * Retrieves a specific education by its ID.
   * @param id - The ID of the education to retrieve.
   * @returns An Observable containing the education details.
   */
  getEducation(id : number): Observable<any> {
    const url = `${apiBasePath}/${id}`;
    return this.#http.get(url);
  }
}
