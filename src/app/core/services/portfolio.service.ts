import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LanguageService } from './language.service';
import {
  Portfolio,
  Profile,
  Project,
  WorkExperience,
  Education,
  Skill,
  Testimony
} from '../models/portfolio.model';

// 🔥 UN SEUL IMPORT POUR TOUT LE MOCK ! 🔥
import portfolioMockData from '../mocks/watojoel.json';

type TranslationsMap = Record<string, unknown>;

type TranslatableItem<T extends object> = T & {
  translations?: TranslationsMap;
};

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly #http = inject(HttpClient);
  readonly #langService = inject(LanguageService);
  readonly #webhookUrl: string = environment.webhookUrl;

  readonly url: string = `${this.#webhookUrl}/565eadbe-ba39-4fbc-99fd-901e69cbfb87`;

  // 1. Les données brutes
  readonly rawData = toSignal<Portfolio | null>(
    this.#http.get<Portfolio>(this.url).pipe(
      catchError((error: unknown) => {
        if (error instanceof HttpErrorResponse) {
          console.warn(`⚠️ Erreur HTTP ${error.status} - Serveur inaccessible. Activation du mock global.`);
        } else {
          console.warn('⚠️ Erreur réseau inconnue. Activation du mock global.', error);
        }

        // 🔥 ON UTILISE DIRECTEMENT LE JSON COMPLET 🔥
        return of(portfolioMockData as unknown as Portfolio);
      })
    ),
    { initialValue: null }
  );

  // 2. Fonction utilitaire privée
  #applyTranslation<T extends object>(
    item: TranslatableItem<T> | null | undefined,
    lang: string
  ): Omit<T, 'translations'> | null {
    if (!item) return null;
    const override = (item.translations?.[lang] || {}) as Partial<Omit<T, 'translations'>>;
    const baseItem = { ...item } as T & { translations?: TranslationsMap };
    delete baseItem.translations;
    return { ...(baseItem as Omit<T, 'translations'>), ...override } as Omit<T, 'translations'>;
  }

  // 3. Les Vues Computées
  readonly profile = computed<Omit<Profile, 'translations'> | null>(() => {
    const data = this.rawData();
    return data?.profile
      ? this.#applyTranslation<Profile>(data.profile, this.#langService.currentLang())
      : null;
  });

  readonly projects = computed<Omit<Project, 'translations'>[]>(() => {
    const data = this.rawData();
    return (data?.projects || []).map((project: Project) =>
      this.#applyTranslation<Project>(project, this.#langService.currentLang()) as Omit<Project, 'translations'>
    );
  });

  readonly workExperiences = computed<Omit<WorkExperience, 'translations'>[]>(() => {
    const data = this.rawData();
    return (data?.work_experiences || []).map((work: WorkExperience) =>
      this.#applyTranslation<WorkExperience>(work, this.#langService.currentLang()) as Omit<WorkExperience, 'translations'>
    );
  });

  readonly educations = computed<Omit<Education, 'translations'>[]>(() => {
    const data = this.rawData();
    return (data?.educations || []).map((education: Education) =>
      this.#applyTranslation<Education>(education, this.#langService.currentLang()) as Omit<Education, 'translations'>
    );
  });

  readonly testimonies = computed<Omit<Testimony, 'translations'>[]>(() => {
    const data = this.rawData();
    return (data?.testimonies || []).map((t: Testimony) =>
      this.#applyTranslation<Testimony>(t, this.#langService.currentLang()) as Omit<Testimony, 'translations'>
    );
  });

  readonly skills = computed<Skill[]>(() => this.rawData()?.skills || []);
}
