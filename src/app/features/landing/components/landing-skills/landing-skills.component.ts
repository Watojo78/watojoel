import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import skillsMockData from '../../../../mocks/skills.json'
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'landing-skills',
  imports: [],
  templateUrl: './landing-skills.component.html',
  styleUrl: './landing-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingSkillsComponent {
  readonly #portfolioService = inject(PortfolioService);
  readonly skills = computed(() => this.#portfolioService.portfolio()?.skills ?? skillsMockData);
}
