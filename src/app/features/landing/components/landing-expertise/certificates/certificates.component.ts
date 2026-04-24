import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import mockData from '../../../../../mocks/certifications.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'certificates',
  imports: [TimelineModule, CommonModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent {
  readonly certifications = computed(() => mockData);
}
