import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private http: HttpClient) { }

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

    return this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, { headers, observe: 'response', responseType: 'text' })
      .pipe(
        catchError(this.handleError) // Use catchError for error handling
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error); // Log the error
    return throwError(() => new Error('Something bad happened; please try again later.')); // Return an observable with a user-friendly error
  }
}
