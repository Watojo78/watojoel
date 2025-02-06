import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { Education } from '../../../../../models/education.model';
import { EducationsService } from '../../../../../services/educations.service';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import educationsMockData from '../../../../../mocks/educations.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'educations',
  imports: [CommonModule, TimelineModule],
  standalone: true,
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationsComponent implements OnInit {
  educations$: Observable<Education[]>;
  private educationsSubject = new BehaviorSubject<Education[]>([])
  mockEducations: Education[] = educationsMockData;

  constructor(private eduService: EducationsService) {
    this.educations$ = this.educationsSubject.asObservable();
  }

  ngOnInit(): void {
    this.loadEducations();
  }

  private loadEducations(){
    this.eduService.getEducations().pipe(
      tap((res: Education[]) => {
        this.educationsSubject.next(res);
        console.log("Educations loaded successfully !!")
      }),
      catchError((err) => {
        console.error("An error occured while loading educations: => ", err);
        this.educationsSubject.next(this.mockEducations);
        return of(this.mockEducations);
      })
    ).subscribe();
  }
}
