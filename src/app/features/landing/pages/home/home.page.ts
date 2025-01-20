import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { RecentProjectsComponent } from "../../components/recent-projects/recent-projects.component";
import { LandingXpsSkillsComponent } from "../../components/landing-xps-skills/landing-xps-skills.component";
import { LandingTestimoniesComponent } from "../../components/landing-testimonies/landing-testimonies.component";
import { HomeContactComponent } from "../../components/home-contact/home-contact.component";

@Component({
  imports: [HeroComponent, RecentProjectsComponent, LandingXpsSkillsComponent, LandingTestimoniesComponent, HomeContactComponent],
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {

  ngOnInit(): void { }
  options = { autoHide: true, scrollbarMinSize: 100 };

}
