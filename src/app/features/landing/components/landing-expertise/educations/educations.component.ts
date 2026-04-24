import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import educationMockData from '../../../../../mocks/educations.json';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../../core/services/portfolio.service';

@Component({
  selector: 'educations',
  imports: [TimelineModule, CommonModule],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationsComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly educations = computed(() => this.#portfolioService.portfolio()?.educations ?? educationMockData);
}
