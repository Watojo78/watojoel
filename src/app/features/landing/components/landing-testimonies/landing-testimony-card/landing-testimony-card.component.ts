import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { Testimony } from '../../../../../core/models/testimony.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'landing-testimony-card',
  imports: [DividerModule, RatingModule, FormsModule],
  templateUrl: './landing-testimony-card.component.html',
  styleUrl: './landing-testimony-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimonyCardComponent {
  testimony = input.required<Testimony>();
}
