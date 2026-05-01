import { ChangeDetectionStrategy, Component, computed, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Contact } from '../../../../core/models/contact.model';
import { ContactService } from '../../../../core/services/contact.service';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'home-contact',
  standalone: true,
  imports: [FloatLabelModule, TextareaModule, ButtonModule, InputTextModule, ToastModule, ReactiveFormsModule],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContactComponent {
  readonly #fb = inject(FormBuilder);
  readonly #contactService = inject(ContactService);
  readonly #langService = inject(LanguageService);
  readonly #messageService = inject(MessageService);

  // Correction : On utilise computed() pour que ça soit réactif !
  readonly isFrench = computed(() => this.#langService.currentLang() === 'fr-FR');

  isSubmitting = false;

  contactForm = this.#fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const formData = this.contactForm.getRawValue() as Contact;

    this.#contactService.sendMessage(formData).subscribe({
      next: () => {
        this.#messageService.add({
          severity: 'success',
          summary: this.isFrench() ? 'Message envoyé' : 'Message sent',
          detail: this.isFrench() ? 'Merci ! Je vous répondrai dans les plus brefs délais.' : 'Thank you! I will get back to you as soon as possible.'
        });

        this.isSubmitting = false;
        this.contactForm.reset();
      },
      error: (err) => {
        console.error(err);
        this.#messageService.add({
          severity: 'error',
          summary: this.isFrench() ? 'Erreur' : 'Error',
          detail: this.isFrench() ? 'Impossible d\'envoyer le message. Veuillez réessayer.' : 'Failed to send message. Please try again.'
        });

        this.isSubmitting = false;
      }
    });
  }
}
