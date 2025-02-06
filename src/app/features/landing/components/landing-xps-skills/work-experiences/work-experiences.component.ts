import { WorkExperience } from '../../../../../models/work-experience.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { WorkExperiencesService } from '../../../../../services/work-experiences.service';
import { BehaviorSubject, Observable, of } from 'rxjs'; // Import BehaviorSubject and of
import { catchError, tap } from 'rxjs/operators'; // Import operators
import { CommonModule } from '@angular/common';
import workExperiencesMockData from '../../../../../mocks/work-experiences.json';

@Component({
  selector: 'work-experiences',
  standalone: true,
  imports: [CommonModule, TimelineModule],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent implements OnInit {
  works$: Observable<WorkExperience[]>;
  private worksSubject = new BehaviorSubject<WorkExperience[]>([]);
  mockWorks: WorkExperience[] = workExperiencesMockData;

  constructor(private workService: WorkExperiencesService) {
    this.works$ = this.worksSubject.asObservable();
  }


  ngOnInit(): void {
    this.loadWorkExperiences();
  }

  private loadWorkExperiences() {
    this.workService.getWorks().pipe(
      tap((res: WorkExperience[]) => { // Use tap for side effects
        this.worksSubject.next(res); // Update BehaviorSubject
        console.log("Work experience loaded successfully !!");
      }),
      catchError((err) => { // Handle errors with catchError
        console.error("An error occurred while loading work experiences: => ", err);
        this.worksSubject.next(this.mockWorks); // Use mock data on error
        return of(this.mockWorks); // Important: Return an Observable to keep the stream alive
      })
    ).subscribe(); // Subscribe to trigger the Observable
  }
}
