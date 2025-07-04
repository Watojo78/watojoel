import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  /**
   * Injects the HttpClient service for making HTTP requests.
   * @private
   */
  readonly #http = inject(HttpClient);

  /**
   * Sends a contact message using EmailJS.
   * @param formData - The contact form data containing name, email, and message.
   * @returns An Observable containing the response from the EmailJS API.
   */
  sendMessage(formData: Contact): Observable<any> {
    const data = {
      service_id: 'service_gmail',
      template_id: 'template_default',
      user_id: 'pT41V0bS-ixriw9pQ',
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.#http.post('https://api.emailjs.com/api/v1.0/email/send', data, { headers, observe: 'response', responseType: 'text' })
      .pipe(
        catchError(this.handleError) // Use catchError for error handling
      );
  }

  /**
   * Handles errors from HTTP requests.
   * @param error - The error object from the HTTP request.
   * @returns An Observable that throws an error with a user-friendly message.
   */
  private handleError(error: Error) {
    console.error('An error occurred:', error); 
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
