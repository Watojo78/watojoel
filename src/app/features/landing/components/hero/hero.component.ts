import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import profileMockData from '../../../../mocks/profile.json';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'landing-hero',
  imports: [NgOptimizedImage, ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly profile = computed(() => this.#portfolioService.portfolio()?.profile ?? profileMockData);
}
