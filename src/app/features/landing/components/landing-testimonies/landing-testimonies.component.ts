import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LandingTestimonyCardComponent } from "./landing-testimony-card/landing-testimony-card.component";
import { TestimoniesService } from '../../../../services/testimonies.service';
import { Testimony } from '../../../../models/testimony.model';

@Component({
  selector: 'landing-testimonies',
  imports: [LandingTestimonyCardComponent],
  standalone: true,
  templateUrl: './landing-testimonies.component.html',
  styleUrl: './landing-testimonies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimoniesComponent implements OnInit {
  testimonies!: Testimony[];

  constructor(private testimonyService: TestimoniesService) { }

  ngOnInit(): void {
    this.testimonyList();
  }

  private testimonyList() {
    this.testimonyService.getTestimonies().subscribe({
      next: (res: Testimony[]) => {
        this.testimonies = res;
        console.log("voici les témoignages: >> ", this.testimonies);
      },
      error: (err) => {
        console.log('Une erreur est survenue lors de chargement des témoignages', err);
      },
    })
  }

  getColumns(): number {
    return window.innerWidth >= 992 ? 3 : 1; // Adjust breakpoint as needed
  }

  getChunkedTestimonies(): Testimony[][] {
    const columns = this.getColumns();
    const chunks: Testimony[][] = Array.from({ length: columns }, () => []);
    this.testimonies.forEach((testimony, index) => chunks[index % columns].push(testimony));
    console.log("voici les chunks >>> ", chunks);
    return chunks;
  }
}
