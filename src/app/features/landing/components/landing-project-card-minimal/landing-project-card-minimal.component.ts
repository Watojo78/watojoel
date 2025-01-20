import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-project-card-minimal',
  imports: [],
  standalone: true,
  templateUrl: './landing-project-card-minimal.component.html',
  styleUrl: './landing-project-card-minimal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingProjectCardMinimalComponent { }
