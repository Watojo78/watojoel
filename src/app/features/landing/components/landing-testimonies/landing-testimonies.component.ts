import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { LandingTestimonyCardComponent } from "./landing-testimony-card/landing-testimony-card.component";
import { TestimoniesService } from '../../../../services/testimonies.service';
import { Testimony } from '../../../../models/testimony.model';
import testimoniesMockData from '../../../../mocks/testimonies.json'
import { BehaviorSubject, catchError, map, Observable, of, Subject, tap } from 'rxjs';

@Component({
  selector: 'landing-testimonies',
  imports: [CommonModule, LandingTestimonyCardComponent],
  standalone: true,
  templateUrl: './landing-testimonies.component.html',
  styleUrl: './landing-testimonies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimoniesComponent implements OnInit, OnDestroy {
  testimonies$: Observable<Testimony[]>
  mockTestimonies: Testimony[] = testimoniesMockData
  chunckedTestimonies$: Observable<Testimony[][]>
  private testimoniesSubject = new BehaviorSubject<Testimony[]>([])
  chunkedTestimoniesSubject = new BehaviorSubject<Testimony[][]>([])
  private destroy$ = new Subject<void>()

  constructor(private testimonyService: TestimoniesService) {
    this.testimonies$ = this.testimoniesSubject.asObservable()
    this.chunckedTestimonies$ = this.chunkedTestimoniesSubject.asObservable();
  }

  ngOnInit(): void {
    this.loadTestimonies();
  }

  private loadTestimonies(){
    this.testimonyService.getTestimonies().pipe(
      tap((res: Testimony[]) => {
        this.testimoniesSubject.next(res)
        console.log("Testimonies loaded successfully !!")
      }),
      catchError((err) =>{
        console.error("An error occured while loading testimonies => ", err);
        this.testimoniesSubject.next(this.mockTestimonies);
        return of(this.mockTestimonies)
      })
    ).subscribe();

    this.chunckedTestimonies$ = this.testimonies$.pipe(
      map((testimonies) => this.chunkArray(testimonies, 3))
    );
  }

  private chunkArray<T>(arr: T[], numColumns: number): T[][] { // numColumns is now a parameter
    const numTestimonies = arr.length;  // Use arr.length
    const chunkedTestimonies = [];
    for (let i = 0; i < numColumns; i++) {
      const column = [];
      for (let j = i; j < numTestimonies; j += numColumns) {
        column.push(arr[j]);
      }
      chunkedTestimonies.push(column);
    }
    return chunkedTestimonies;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
