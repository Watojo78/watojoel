import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingTestimonyCardComponent } from "./landing-testimony-card/landing-testimony-card.component";

@Component({
  selector: 'landing-testimonies',
  imports: [LandingTestimonyCardComponent],
  standalone: true,
  templateUrl: './landing-testimonies.component.html',
  styleUrl: './landing-testimonies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimoniesComponent { }
