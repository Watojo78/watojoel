import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Project } from '../../../../../models/project.model';

@Component({
  selector: 'landing-project-card-minimal',
  imports: [ButtonModule],
  templateUrl: './landing-project-card-minimal.component.html',
  styleUrl: './landing-project-card-minimal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingProjectCardMinimalComponent {
  @Input() project!: Project;
}
