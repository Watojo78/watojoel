import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill } from '../models/skill.model';

const apiBasePath = environment.API_BASEPATH;

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
    return this.#http.get<Skill[]>(url);
  }

  /**
   * Retrieves a specific skill by its ID.
   * @param skillId - The ID of the skill to retrieve.
   * @returns An Observable containing the skill details.
   */
  getSkill(skillId: number): Observable<Skill> {
    const url = `${apiBasePath}//${skillId}`;
    return this.#http.get<Skill>(url);
  }
}
