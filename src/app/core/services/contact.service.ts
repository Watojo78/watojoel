import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';
const apiBasePath = environment.apiUrl;

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
   * Sends a contact message using the API.
   * @param formData - The contact form data containing name, email, and message.
   * @returns An Observable containing the response from the API.
   */

  sendMessage(data: Contact): Observable<Contact> {
    const url = `${apiBasePath}/messages`;
    return this.#http.post<Contact>(url, data);
  }
}
