import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { EducationsService } from '../../../../../services/educations.service';
import { toSignal } from '@angular/core/rxjs-interop';
import mockData from '../../../../../mocks/educations.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'educations',
  imports: [TimelineModule, CommonModule],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EducationsComponent {
  readonly #educationService = inject(EducationsService);
  readonly #educations = toSignal(this.#educationService.getEducations(),{initialValue: mockData});
  readonly loading = computed(() => this.#educations().length === 0);
  readonly educations = computed(() => this.#educations());
}
