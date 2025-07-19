import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Certification } from '../models/certification.model';
const apiBasePath = environment.apiUrl;
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {
  /**
   * Injects the HttpClient service for making HTTP requests.
   * @private
   */
  readonly #http = inject(HttpClient);

  /**
   * Retrieves all certifications.
   * @returns An Observable containing the list of certifications.
   */
  getCertifications(): Observable<Certification[]> {
    const url = `${apiBasePath}/certifications`;
    return this.#http.get<ApiResponse<Certification[]>>(url).pipe(
      map(response => response.data)
    );
  }

  /**
   * Retrieves a specific certification by its ID.
   * @param certificationId - The ID of the certification to retrieve.
   * @returns An Observable containing the certification details.
   */
  getCertification(certificationId : number): Observable<Certification> {
    const url = `${apiBasePath}/${certificationId}`;
    return this.#http.get<ApiResponse<Certification>>(url).pipe(
      map(response => response.data)
    );
  }
}
