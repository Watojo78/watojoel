import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import mockData from '../../../../mocks/skills.json'
import { SkillsService } from '../../../../services/skills.service';

@Component({
  selector: 'landing-skills',
  imports: [],
  templateUrl: './landing-skills.component.html',
  styleUrl: './landing-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingSkillsComponent {
  readonly #skillService = inject(SkillsService);
  readonly #mockSkills = mockData;
  readonly #skills = toSignal(this.#skillService.getSkills(), { initialValue: this.#mockSkills });
  readonly loading = computed(() => this.#skills().length === 0);
  readonly skills = computed(() => this.#skills());
}
