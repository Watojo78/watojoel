import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RawWorkExperience, WorkExperience } from '../models/work-experience.model';
import { ApiResponse } from '../models/api-response.model';

const apiBasePath = environment.apiUrl;
const params = new HttpParams()
  .set('fields', '*,environment.skills_id.name'); // On demande uniquement le nom des compétences

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
    return this.#http.get<ApiResponse<RawWorkExperience[]>>(url, { params }).pipe(
      map(response => response.data),
      map(rawWorks => rawWorks.map(rawWork => {
        // Transformation de l'expérience de travail
        const work: WorkExperience = {
          ...rawWork, // On copie les champs communs (id, company, etc.)
          environment: rawWork.environment.map(envItem => ({
            name: envItem.skills_id.name // On simplifie l'environnement
          }))
        };
        return work;
      }))
    );
  }

  /**
   * Fetches a specific work experience by its ID.
   * @param id - The ID of the work experience to fetch.
   * @returns An Observable containing the work experience data.
   */
  getWork(id : number): Observable<WorkExperience> {
    const url = `${apiBasePath}/${id}`;
    return this.#http.get<ApiResponse<RawWorkExperience>>(url, { params }).pipe(
      map(response => response.data),
      map(rawWork => {
        // Transformation de l'expérience de travail
        const work: WorkExperience = {
          ...rawWork, // On copie les champs communs (id, company, etc.)
          environment: rawWork.environment.map(envItem => ({
            name: envItem.skills_id.name // On simplifie l'environnement
          }))
        };
        return work;
      })
    );
  }
}
