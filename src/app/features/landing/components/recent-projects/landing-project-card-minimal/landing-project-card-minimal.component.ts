import { ChangeDetectionStrategy, Component, input } from '@angular/core'; // 1. On importe 'input' au lieu de 'Input'
import { ButtonModule } from 'primeng/button';
import { Project } from '../../../../../core/models/project.model';

@Component({
  selector: 'landing-project-card-minimal',
  imports: [ButtonModule],
  templateUrl: './landing-project-card-minimal.component.html',
  styleUrl: './landing-project-card-minimal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingProjectCardMinimalComponent {

  // 2. La nouvelle syntaxe magique ✨
  project = input.required<Project>();
}
