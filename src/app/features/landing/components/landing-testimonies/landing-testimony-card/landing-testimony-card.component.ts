import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { Testimony } from '../../../../../core/models/testimony.model';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'landing-testimony-card',
  imports: [DividerModule, RatingModule, FormsModule],
  templateUrl: './landing-testimony-card.component.html',
  styleUrl: './landing-testimony-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimonyCardComponent {
  readonly testimony = input.required<Testimony>();
  readonly #langService = inject(LanguageService);
  get ratingValue(): number {
    return Math.round(Number(this.testimony().rating));
  }
  readonly isFrench = computed(() => this.#langService.currentLang() === 'fr-FR');
}
