import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LandingTestimonyCardComponent } from "./landing-testimony-card/landing-testimony-card.component";
import { TestimoniesService } from '../../../../services/testimonies.service';
import { Testimony } from '../../../../models/testimony.model';

@Component({
  selector: 'landing-testimonies',
  imports: [LandingTestimonyCardComponent],
  standalone: true,
  templateUrl: './landing-testimonies.component.html',
  styleUrl: './landing-testimonies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTestimoniesComponent implements OnInit {
  testimonies!: Testimony[];
  mockTestimonies!: Testimony[];

  constructor(private testimonyService: TestimoniesService) {}

  ngOnInit(): void {
    this.mockTestimonies = [
      {
        "id": 1,
        "name": "John Doe",
        "role": "Client",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Watojoel did an excellent job on my website. Highly recommended!"
      },
      {
        "id": 2,
        "name": "Jane Doe",
        "role": "Colleague",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur quia praesentium suscipit, amet soluta quod tenetur corporis repellat, ut, hic cum facere necessitatibus perspiciatis aperiam vero aliquam minus at!"
      },
      {
        "id": 3,
        "name": "Moe Doen",
        "role": "CEO",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Watojoel is a skilled dedicated and professionnal developer. It was a pleasure working with them."
      },
      {
        "id": 4,
        "name": "Samy John",
        "role": "Software Developer",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur quia praesentium suscipit, amet soluta quod tenetur corporis repellat, ut, hic cum facere necessitatibus perspiciatis aperiam vero aliquam minus at!"
      },
      {
        "id": 5,
        "name": "Moe Doen",
        "role": "CEO",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Watojoel is a skilled dedicated and professionnal developer. It was a pleasure working with them."
      },
      {
        "id": 6,
        "name": "Samy John",
        "role": "Software Developer",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur quia praesentium suscipit, amet soluta quod tenetur corporis repellat, ut, hic cum facere necessitatibus perspiciatis aperiam vero aliquam minus at!"
      },
      {
        "id": 7,
        "name": "Samy John",
        "role": "Software Developer",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur quia praesentium suscipit, amet soluta quod tenetur corporis repellat, ut, hic cum facere necessitatibus perspiciatis aperiam vero aliquam minus at!"
      },
      {
        "id": 8,
        "name": "Moe Doen",
        "role": "CEO",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Watojoel is a skilled dedicated and professionnal developer. It was a pleasure working with them."
      },
      {
        "id": 9,
        "name": "Samy John",
        "role": "Software Developer",
        "profileUrl": "/assets/profile.png",
        "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur quia praesentium suscipit, ut, hic cum facere necessitatibus perspiciatis aperiam vero aliquam minus at!"
      }
    ]
    this.testimonyList();
  }

  private testimonyList() {
    this.testimonyService.getTestimonies().subscribe({
      next: (res: any[]) => {
        this.testimonies = res;
        console.log("voici les témoignages: >> ", this.testimonies);
      },
      error: (err) => {
        this.testimonies = this.mockTestimonies;
        console.log('Une erreur est survenue lors de chargement des témoignages', err);
      },
    })
  }

  getColumns(): number {
    return window.innerWidth >= 992 ? 3 : 1; // Adjust breakpoint as needed
  }

  getChunkedTestimonies(): Testimony[][] {
    const columns = this.getColumns();
    const chunks: Testimony[][] = Array.from({ length: columns }, () => []);
    this.testimonies.forEach((testimony, index) => chunks[index % columns].push(testimony));
    console.log("voici les chunks >>> ", chunks);
    return chunks;
  }
}
