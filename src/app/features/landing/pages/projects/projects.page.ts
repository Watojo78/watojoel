import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPage {

  ngOnInit(): void { }

}
