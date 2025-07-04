import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const apiBasePath = environment.API_BASEPATH;

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
  getCertifications(): Observable<any> {
    const url = `${apiBasePath}/certifications`;
    return this.#http.get(url);
  }

  /**
   * Retrieves a specific certification by its ID.
   * @param certificationId - The ID of the certification to retrieve.
   * @returns An Observable containing the certification details.
   */
  getCertification(certificationId : any): Observable<any> {
    const url = `${apiBasePath}/${certificationId}`;
    return this.#http.get(url);
  }
}
