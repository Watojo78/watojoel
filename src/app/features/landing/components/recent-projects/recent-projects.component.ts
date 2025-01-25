import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LandingProjectCardMinimalComponent } from './landing-project-card-minimal/landing-project-card-minimal.component';

@Component({
  selector: 'landing-recent-projects',
  imports: [RouterLink, LandingProjectCardMinimalComponent, ButtonModule],
  standalone: true,
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentProjectsComponent { }
