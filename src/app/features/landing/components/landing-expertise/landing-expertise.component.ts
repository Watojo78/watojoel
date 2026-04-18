import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EducationsComponent } from './educations/educations.component';
import { WorkExperiencesComponent } from "./work-experiences/work-experiences.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'landing-expertise',
  imports: [EducationsComponent, WorkExperiencesComponent, CertificatesComponent, TabsModule, ButtonModule, RippleModule ],
  templateUrl: './landing-expertise.component.html',
  styleUrl: './landing-expertise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingExpertiseComponent {
}
