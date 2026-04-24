import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LandingTestimonyCardComponent } from "./landing-testimony-card/landing-testimony-card.component";
import testimoniesMockData from '../../../../mocks/testimonies.json'
import { chunkArray } from '../../../../shared/utils/array.util';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'landing-testimonies',
  imports: [LandingTestimonyCardComponent],
  templateUrl: './landing-testimonies.component.html',
  styleUrl: './landing-testimonies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimoniesComponent{
  readonly #portfolioService = inject(PortfolioService);
  readonly #testimonies = computed(() => this.#portfolioService.portfolio()?.testimonies ?? testimoniesMockData);
  readonly chunkedTestimonies = computed(() => chunkArray(this.#testimonies(), 3));
}
