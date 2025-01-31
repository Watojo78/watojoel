import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { Testimony } from '../../../../../models/testimony.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'landing-testimony-card',
  imports: [DividerModule, RatingModule, FormsModule],
  standalone: true,
  templateUrl: './landing-testimony-card.component.html',
  styleUrl: './landing-testimony-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimonyCardComponent implements OnInit{
  @Input() testimony!: Testimony;
  value: number = 3.2;

  constructor(){}
  ngOnInit(): void{}
}
