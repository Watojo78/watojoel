import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { EducationsComponent } from './educations/educations.component';
import { WorkExperiencesComponent } from "./work-experiences/work-experiences.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import mockData from '../../../../mocks/skills.json'
import { SkillsService } from '../../../../services/skills.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'landing-xps-skills',
  imports: [EducationsComponent, WorkExperiencesComponent, CertificatesComponent, TabsModule, ButtonModule, RippleModule ],
  templateUrl: './landing-xps-skills.component.html',
  styleUrl: './landing-xps-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingXpsSkillsComponent {
  readonly #skillService = inject(SkillsService);
  readonly #mockSkills = mockData;
  readonly #skills = toSignal(this.#skillService.getSkills(), { initialValue: this.#mockSkills });
  readonly loading = computed(() => this.#skills().length === 0);
  readonly skills = computed(() => this.#skills());
}
