import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-hero',
  imports: [],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent { }
