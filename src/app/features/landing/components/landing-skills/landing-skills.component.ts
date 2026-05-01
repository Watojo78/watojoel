import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'landing-skills',
  imports: [],
  templateUrl: './landing-skills.component.html',
  styleUrl: './landing-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingSkillsComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly #langService = inject(LanguageService);
  readonly skills = this.#portfolioService.skills;
  readonly isFrench = computed(() => this.#langService.currentLang() === 'fr-FR');
}
