import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { WorkExperiencesService } from '../../../../../services/work-experiences.service';
import mockData from '../../../../../mocks/work-experiences.json';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'work-experiences',
  imports: [TimelineModule, CommonModule],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent {
  readonly #workService = inject(WorkExperiencesService);
  readonly #works = toSignal(this.#workService.getWorks(),{initialValue: mockData});
  readonly loading = computed(() => this.#works().length === 0);
  readonly works = computed(() => this.#works());
}
