import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LandingTestimonyCardComponent } from "./landing-testimony-card/landing-testimony-card.component";
import { TestimoniesService } from '../../../../services/testimonies.service';
import mockData from '../../../../mocks/testimonies.json'
import { toSignal } from '@angular/core/rxjs-interop';
import { chunkArray } from '../../../../shared/utils/array.util';

@Component({
  selector: 'landing-testimonies',
  standalone: true,
  imports: [LandingTestimonyCardComponent],
  templateUrl: './landing-testimonies.component.html',
  styleUrl: './landing-testimonies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimoniesComponent{
  readonly #testimonyService = inject(TestimoniesService);
  readonly #testimonies = toSignal( this.#testimonyService.getTestimonies(), {initialValue: mockData});
  readonly loading = computed(() => this.#testimonies().length === 0);
  readonly chunkedTestimonies = computed(() => chunkArray(this.#testimonies(), 3));
}
