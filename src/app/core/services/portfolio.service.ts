import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';
import { Portfolio } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly #http = inject(HttpClient);
  readonly #webhookUrl = environment.webhookUrl;
  readonly url = `${this.#webhookUrl}/565eadbe-ba39-4fbc-99fd-901e69cbfb87`;
  readonly portfolio = toSignal(
    this.#http.get<Portfolio>(this.url),
    {initialValue: null}
  );
}
