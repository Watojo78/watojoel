import { Project } from '../../../../models/project.model';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LandingProjectCardMinimalComponent } from './landing-project-card-minimal/landing-project-card-minimal.component';
import projectMockData from '../../../../mocks/projects.json';
import { ProjectsService } from '../../../../services/projects.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { chunkArray } from '../../../../shared/utils/array.util';
@Component({
  selector: 'landing-recent-projects',
  imports: [LandingProjectCardMinimalComponent, ButtonModule],
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentProjectsComponent {
  readonly #projectService = inject(ProjectsService);
  readonly #mockProjects: Project[] = projectMockData;
  readonly #projects = toSignal(this.#projectService.getProjects(), { initialValue: this.#mockProjects });
  readonly loading = computed(() => this.#projects().length === 0);
  readonly chunkedProjects = computed(() => chunkArray(this.#projects(), 3));
  constructor() {
    effect(() => {
      console.log('RecentProjectsComponent: Projects updated', this.#projects());
    });
  }

}
