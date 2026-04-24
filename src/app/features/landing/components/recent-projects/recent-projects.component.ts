import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { LandingProjectCardMinimalComponent } from './landing-project-card-minimal/landing-project-card-minimal.component';
import { chunkArray } from '../../../../shared/utils/array.util';
import projectMockData from '../../../../mocks/projects.json';

@Component({
  selector: 'landing-recent-projects',
  imports: [LandingProjectCardMinimalComponent, ButtonModule],
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentProjectsComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly projects = computed(() => this.#portfolioService.portfolio()?.projects ?? projectMockData);
  readonly chunkedProjects = computed(() => chunkArray(this.projects(), 3));
}
