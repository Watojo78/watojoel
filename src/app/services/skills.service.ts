import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill } from '../models/skill.model';
import { ApiResponse } from '../models/api-response.model';

const apiBasePath = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  /**
   * Injects the HttpClient service for making HTTP requests.
   * @private
   */
  readonly #http = inject(HttpClient);

  /**
   * Retrieves all skills.
   * @returns An Observable containing the list of skills.
   */
  getSkills(): Observable<Skill[]> {
    const url = `${apiBasePath}/skills`;
    return this.#http.get<ApiResponse<Skill[]>>(url).pipe(
      map(response => response.data)
    );
  }
}
