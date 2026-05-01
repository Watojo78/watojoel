import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { LanguageService } from '../../../../core/services/language.service'; // Ajuste le chemin selon ton projet

@Component({
  selector: 'landing-header',
  imports: [ButtonModule, MenuModule, RouterLink, ToggleSwitch, FormsModule],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {
  private router = inject(Router);
  private langService = inject(LanguageService);

  // 1. Gestion de la Langue (Réactif grâce aux Signals)
  readonly isFrench = computed(() => this.langService.currentLang() === 'fr-FR');
  readonly langPrefix = computed(() => this.isFrench() ? 'fr' : 'en');

  // 2. Gestion du Mode Sombre
  // (Par défaut sur 'true' si ton starter charge le mode sombre au démarrage)
  checked = true;

  // 3. Menu Mobile (PrimeNG) rendu réactif
  // On utilise les 'command' pour déclencher le scroll lors du clic sur mobile
  readonly items = computed<MenuItem[]>(() => [
    { label: 'Accueil', command: () => this.scrollToTop() },
    { label: 'Projets', command: () => this.scrollTo('projets') },
    { label: 'Expertise', command: () => this.scrollTo('expertise') },
    { label: 'Stack', command: () => this.scrollTo('stack') },
    { label: 'Contact', command: () => this.scrollTo('contact') }
  ]);

  switchLanguage() {
    // Le service va s'occuper de changer l'URL et de mettre à jour le Signal
    this.langService.toggleLanguage();
  }

  toggleTheme() {
    // Ajoute ou retire la classe 'dark' sur la balise <html> pour Tailwind CSS
    if (this.checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  scrollToTop(): void {
    this.router.navigate(['/', this.langPrefix(), 'home']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  scrollTo(elementId: string): void {
    // 1. Navigation dynamique respectant la langue actuelle (/fr/home ou /en/home)
    this.router.navigate(['/', this.langPrefix(), 'home']).then(() => {
      // 2. Attendre un court instant que le DOM soit prêt
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          // 3. Forcer le scroll natif du navigateur
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.warn(`L'élément avec l'ID ${elementId} est introuvable.`);
        }
      }, 100);
    });
  }
}
