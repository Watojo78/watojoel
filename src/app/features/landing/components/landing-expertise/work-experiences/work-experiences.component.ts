import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../../core/services/portfolio.service';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'work-experiences',
  imports: [TimelineModule, CommonModule],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly #langService = inject(LanguageService);
  readonly works = this.#portfolioService.workExperiences;
  readonly isFrench = computed(() => this.#langService.currentLang() === 'fr-FR');
}
