import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Testimony } from '../models/testimony.model';
import { ApiResponse } from '../models/api-response.model';

const apiBasePath = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {
  /**
   * Injects the HttpClient service for making HTTP requests.
   * @private
   */
  readonly #http = inject(HttpClient);

  /**
   * Retrieves all testimonies.
   * @returns An Observable containing the list of testimonies.
   */
  getTestimonies(): Observable<Testimony[]> {
    const url = `${apiBasePath}/testimonies`;
    return this.#http.get<ApiResponse<Testimony[]>>(url).pipe(
      map(response => response.data)
    );
  }

  /**
   * Retrieves a specific testimony by its ID.
   * @param id - The ID of the testimony to retrieve.
   * @returns An Observable containing the testimony details.
   */
  getTestimony(id : number): Observable<Testimony> {
    const url = `${apiBasePath}/${id}`;
    return this.#http.get<ApiResponse<Testimony>>(url).pipe(
      map(response => response.data)
    );
  }
}
