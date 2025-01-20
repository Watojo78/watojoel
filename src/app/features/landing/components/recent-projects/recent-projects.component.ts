import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-recent-projects',
  imports: [],
  standalone: true,
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentProjectsComponent { }
