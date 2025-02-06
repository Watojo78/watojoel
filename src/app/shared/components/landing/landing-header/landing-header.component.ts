import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Select } from 'primeng/select';

@Component({
  selector: 'landing-header',
  imports: [CommonModule, ButtonModule, RouterLink, ToggleSwitch, FormsModule],
  standalone: true,
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {
  checked: boolean = false;
  isFrench: boolean = true; // Default language is French

  switchLanguage() {
    this.isFrench = !this.isFrench;
    // Here you would typically call a service or function to
    // actually change the application's language.
    if (this.isFrench) {
      console.log("Switching to French");
      // Call your language service to set French
    } else {
      console.log("Switching to English");
      // Call your language service to set English
    }
  }

}
