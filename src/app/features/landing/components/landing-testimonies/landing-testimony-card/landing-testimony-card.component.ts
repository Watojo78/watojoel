import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { Testimony } from '../../../../../models/testimony.model';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../../environments/environment.development';

@Component({
  selector: 'landing-testimony-card',
  imports: [DividerModule, RatingModule, FormsModule],
  templateUrl: './landing-testimony-card.component.html',
  styleUrl: './landing-testimony-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimonyCardComponent {
  @Input() testimony!: Testimony;
  readonly assetsUrl = environment.assetsUrl;
}
