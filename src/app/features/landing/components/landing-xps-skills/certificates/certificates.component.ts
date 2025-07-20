import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import mockData from '../../../../../mocks/certifications.json';
import { toSignal } from '@angular/core/rxjs-interop';
import { CertificationsService } from '../../../../../services/certifications.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'certificates',
  imports: [TimelineModule, CommonModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent {
  readonly #certificationsService = inject(CertificationsService);
  readonly #certifications = toSignal(this.#certificationsService.getCertifications(), { initialValue: mockData });
  readonly loading = computed(() => this.#certifications().length === 0);
  readonly certifications = computed(() => this.#certifications());
}
