import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import worksMockData from '../../../../../mocks/work-experiences.json';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../../core/services/portfolio.service';

@Component({
  selector: 'work-experiences',
  imports: [TimelineModule, CommonModule],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly works = computed(() => this.#portfolioService.portfolio()?.work_experiences ?? worksMockData);
}
