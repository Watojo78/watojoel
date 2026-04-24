import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Contact } from '../../../../core/models/contact.model';
import { ContactService } from '../../../../core/services/contact.service';

@Component({
  selector: 'home-contact',
  imports: [FloatLabelModule, TextareaModule, ButtonModule, InputTextModule, ToastModule, ReactiveFormsModule],
  providers: [MessageService],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContactComponent {readonly #fb = inject(FormBuilder);
  readonly #contactService = inject(ContactService);

  // Injection du service de notification PrimeNG
  readonly #messageService = inject(MessageService);

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
        // Déclenche le Toast de succès (Vert)
        this.#messageService.add({
          severity: 'success',
          summary: 'Message envoyé',
          detail: 'Merci ! Je vous répondrai dans les plus brefs délais.'
        });

        this.isSubmitting = false;
        this.contactForm.reset();
      },
      error: (err) => {
        console.error(err);
        // Déclenche le Toast d'erreur (Rouge)
        this.#messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible d\'envoyer le message. Veuillez réessayer.'
        });

        this.isSubmitting = false;
      }
    });
  }
}
