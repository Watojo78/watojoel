import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../../core/services/portfolio.service';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'educations',
  imports: [TimelineModule, CommonModule],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationsComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly #langService = inject(LanguageService);
  readonly educations = this.#portfolioService.educations;
  readonly isFrench = computed(() => this.#langService.currentLang() === 'fr-FR');
}
