import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LandingTestimonyCardComponent } from "./landing-testimony-card/landing-testimony-card.component";
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'landing-testimonies',
  imports: [LandingTestimonyCardComponent, CarouselModule],
  standalone: true,
  templateUrl: './landing-testimonies.component.html',
  styleUrl: './landing-testimonies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimoniesComponent implements OnInit { 
  responsiveOptions: any[] | undefined;
  testimonies: any[] | undefined;

  ngOnInit(){
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }
}
