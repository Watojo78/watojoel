import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'landing-header',
  imports: [CommonModule, ButtonModule, MenuModule, RouterLink, ToggleSwitch, FormsModule],
  standalone: true,
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {
  checked: boolean = false;
  isFrench: boolean = true; // Default language is French
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Accueil'},
          { label: 'Projets'},
          { label: 'Blog'}
      ];
  }

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
