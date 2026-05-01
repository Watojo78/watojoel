import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LandingTestimonyCardComponent } from "./landing-testimony-card/landing-testimony-card.component";
import { chunkArray } from '../../../../shared/utils/array.util';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'landing-testimonies',
  imports: [LandingTestimonyCardComponent],
  templateUrl: './landing-testimonies.component.html',
  styleUrl: './landing-testimonies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimoniesComponent{
  readonly #portfolioService = inject(PortfolioService)
  readonly #langService = inject(LanguageService)
  readonly #testimonies = this.#portfolioService.testimonies
  readonly chunkedTestimonies = computed(() => chunkArray(this.#testimonies(), 3))
  readonly isFrench = computed(() => this.#langService.currentLang() === 'fr-FR')
}
