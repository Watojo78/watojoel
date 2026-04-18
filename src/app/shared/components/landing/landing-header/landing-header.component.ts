import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'landing-header',
  imports: [ButtonModule, MenuModule, RouterLink, ToggleSwitch, FormsModule],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent implements OnInit {
  private router = inject(Router);
  checked = false;
  isFrench = true; // Default language is French
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Accueil'},
          { label: 'Projets'},
          { label: 'Expertise'},
          { label: 'Stack'},
          { label: 'Contact'}
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

  scrollTo(elementId: string): void {
    // 1. S'assurer qu'on est sur la bonne page (Home)
    this.router.navigate(['/']).then(() => {
      // 2. Attendre un court instant que le DOM soit prêt
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          // 3. Forcer le scroll natif du navigateur
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.warn(`L'élément avec l'ID ${elementId} est introuvable.`);
        }
      }, 100); // 100ms suffit généralement
    });
  }
}
