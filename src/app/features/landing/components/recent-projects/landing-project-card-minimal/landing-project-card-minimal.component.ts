import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Project } from '../../../../../core/models/project.model';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'landing-project-card-minimal',
  imports: [ButtonModule],
  templateUrl: './landing-project-card-minimal.component.html',
  styleUrl: './landing-project-card-minimal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingProjectCardMinimalComponent {

  // 2. La nouvelle syntaxe magique ✨
  readonly project = input.required<Project>()
  readonly #langService = inject(LanguageService)
  readonly isFrench = computed(() => this.#langService.currentLang() === 'fr-FR')
}
