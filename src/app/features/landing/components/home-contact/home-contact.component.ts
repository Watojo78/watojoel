import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactService } from '../../../../services/contact.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'home-contact',
  standalone: true,
  imports: [FloatLabelModule, TextareaModule, ButtonModule, InputTextModule, ToastModule, ReactiveFormsModule],
  providers: [MessageService],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContactComponent {

  contactForm!: FormGroup;
  submitted = false;
  isSuccess: boolean = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService,
    private contactService: ContactService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.contactForm.invalid) return;

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: (res: string) => { // Type the response if possible
        this.isSuccess = true;
        console.log('SUCCESS!', res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Votre Message a été envoyé avec succès !',
          life: 3000 });
        this.contactForm.reset(this.successMessage);
        this.submitted = false;
      },
      error: (error) => {
        console.error('FAILED...', error);
        this.messageService.add({ // Toast for error
          severity: 'error',
          summary: 'Error',
          detail: 'Error sending message. Please try again later.',
          life: 3000});
        this.submitted = false;
      }
    });
  }

}
