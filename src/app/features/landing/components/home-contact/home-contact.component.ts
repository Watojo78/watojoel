import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'home-contact',
  imports: [FloatLabelModule, TextareaModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContactComponent {

  contactForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder){
      this.contactForm = this.fb.group({
        username: '',
        email: '',
        message: ''
      });
  }
  
  onFormSubmit(): void{
    if(!this.contactForm.valid){
      console.log('An error occured !');
    }
    console.log(this.contactForm.value);
  }

}
