import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { RecentProjectsComponent } from "../../components/recent-projects/recent-projects.component";
import { LandingTestimoniesComponent } from "../../components/landing-testimonies/landing-testimonies.component";
import { HomeContactComponent } from "../../components/home-contact/home-contact.component";
import { LandingSkillsComponent } from '../../components/landing-skills/landing-skills.component';
import { LandingExpertiseComponent } from '../../components/landing-expertise/landing-expertise.component';

@Component({
  imports: [HeroComponent, RecentProjectsComponent, LandingExpertiseComponent, LandingSkillsComponent, LandingTestimoniesComponent, HomeContactComponent],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  options = {
    autoHide: true,
    scrollbarMinSize: 100
  }
}
