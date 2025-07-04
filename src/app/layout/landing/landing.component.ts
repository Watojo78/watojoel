import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingHeaderComponent } from "../../shared/components/landing/landing-header/landing-header.component";
import { LandingFooterComponent } from "../../shared/components/landing/landing-footer/landing-footer.component";
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'landing',
  imports: [RouterOutlet, LandingHeaderComponent, LandingFooterComponent, SimplebarAngularModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {

  options = { autoHide: true, scrollbarMinSize: 100 };

}
