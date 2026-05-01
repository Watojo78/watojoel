import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'landing-hero',
  imports: [NgOptimizedImage, ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly #langService = inject(LanguageService);
  readonly profile = this.#portfolioService.profile;
  readonly isFrench = computed(() => this.#langService.currentLang() === 'fr-FR');
}
