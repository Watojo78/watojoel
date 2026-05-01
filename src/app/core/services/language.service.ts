import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private router = inject(Router);

  // Le signal que ton PortfolioService écoute déjà !
  currentLang = signal<'fr-FR' | 'en-US'>('fr-FR');

  constructor() {
    // On écoute la navigation d'Angular
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // On regarde l'URL finale (après redirections)
      const url = event.urlAfterRedirects;

      // Si l'URL commence par /en/, on passe en anglais
      if (url.startsWith('/en')) {
        this.currentLang.set('en-US');
      } else {
        this.currentLang.set('fr-FR');
      }
    });
  }

  // La nouvelle méthode pour basculer de langue avec le Router
  toggleLanguage() {
    const currentUrl = this.router.url;
    const isEnglish = this.currentLang() === 'en-US';

    // On détermine le nouveau préfixe
    const newPrefix = isEnglish ? '/fr' : '/en';

    // On remplace le premier segment de l'URL (/fr ou /en) par le nouveau
    const newUrl = currentUrl.replace(/^\/(fr|en)/, newPrefix);

    // On demande au Router de naviguer !
    this.router.navigateByUrl(newUrl);
  }
}
