import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-contact',
  imports: [],
  standalone: true,
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContactComponent { }
