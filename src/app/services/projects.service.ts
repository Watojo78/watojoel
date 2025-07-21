import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project, RawProject } from '../models/project.model';
import { ApiResponse } from '../models/api-response.model';

const apiBasePath = environment.apiUrl;
const apiBasePathAssets = environment.assetsUrl;
const params = new HttpParams()
  .set('fields', '*,techstack.skills_id.name'); // On demande uniquement le nom des compétences

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
    return this.#http.get<ApiResponse<RawProject[]>>(url, { params }).pipe(
      // Étape 1 : On extrait le tableau de données brutes
      map(response => response.data),
      map(rawProjects => rawProjects.map(rawProject => {
      // Transformation du projet
      const project: Project = {
        ...rawProject, // On copie les champs communs (id, title, etc.)
        thumbnail_url: `${apiBasePathAssets}/${rawProject.thumbnail_path}`, // On crée l'URL de la miniature
        techstack: rawProject.techstack.map(techItem => ({ // On transforme le techstack
          name: techItem.skills_id.name
        }))
      };
      return project;
    }))
    )
  }

  /**
   * Retrieves a specific project by its ID.
   * @param projectId - The ID of the project to retrieve.
   * @returns An Observable containing the project details.
   */
  getProject(projectId : number): Observable<Project> {
    const url = `${apiBasePath}/${projectId}`;
    return this.#http.get<ApiResponse<RawProject>>(url, { params }).pipe(
      map(response => response.data),
      map(rawProject => {
        // Transformation du projet
        const project: Project = {
          ...rawProject, // On copie les champs communs (id, title, etc.)
          thumbnail_url: `${apiBasePathAssets}/${rawProject.thumbnail_path}`, // On crée l'URL de la miniature
          techstack: rawProject.techstack.map(techItem => ({ // On transforme le techstack
            name: techItem.skills_id.name
          }))
        };
        return project;
      })
    );
  }
}
