import { Project } from '../../../../models/project.model';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LandingProjectCardMinimalComponent } from './landing-project-card-minimal/landing-project-card-minimal.component';
import { BehaviorSubject, catchError, map, Observable, of, Subject, tap } from 'rxjs';
import projectMockData from '../../../../mocks/projects.json';
import { ProjectsService } from '../../../../services/projects.service';

@Component({
  selector: 'landing-recent-projects',
  imports: [CommonModule, LandingProjectCardMinimalComponent, ButtonModule],
  standalone: true,
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentProjectsComponent implements OnInit, OnDestroy {
  projects$: Observable<Project[]>
  private projectsSubject = new BehaviorSubject<Project[]>([])
  mockProjects: Project[] = projectMockData
  chunkedProjects$: Observable<Project[][]>
  chunkedProjectsSubject = new BehaviorSubject<Project[][]>([])
  private destroy$ = new Subject<void>(); // Subject for unsubscribing

  constructor(private projectService : ProjectsService){
    this.projects$ = this.projectsSubject.asObservable();
    this.chunkedProjects$ = this.chunkedProjectsSubject.asObservable();
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(){
    this.projectService.getProjects().pipe(
      tap((res: Project[]) => {
        this.projectsSubject.next(res)
        console.log("Projects loaded successfully !!");
      }),
      catchError((err) => {
        console.error("An error occurred while loading projects => ", err);
        this.projectsSubject.next(this.mockProjects); // Use mock data in case of error
        return of(this.mockProjects); // Return mock data as observable
      })
    ).subscribe();

    this.chunkedProjects$ = this.projects$.pipe( // Create a new observable for chunked data
      map((projects) => this.chunkArray(projects, 3)) // Chunk the data within the pipe
    );
  }

  private chunkArray<T>(arr: T[], numColumns: number): T[][] { // numColumns is now a parameter
    const numProjects = arr.length;  // Use arr.length
    const chunkedProjects = [];
    for (let i = 0; i < numColumns; i++) {
      const column = [];
      for (let j = i; j < numProjects; j += numColumns) {
        column.push(arr[j]);
      }
      chunkedProjects.push(column);
    }
    return chunkedProjects;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
