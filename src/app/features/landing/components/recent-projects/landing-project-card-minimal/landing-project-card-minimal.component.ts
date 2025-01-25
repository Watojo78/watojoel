import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'landing-project-card-minimal',
  imports: [ButtonModule],
  standalone: true,
  templateUrl: './landing-project-card-minimal.component.html',
  styleUrl: './landing-project-card-minimal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingProjectCardMinimalComponent { }
