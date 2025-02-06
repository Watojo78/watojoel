import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EducationsComponent } from './educations/educations.component';
import { WorkExperiencesComponent } from "./work-experiences/work-experiences.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { Skill } from '../../../../models/skill.model';
import skillMockData from '../../../../mocks/skills.json'
import { SkillsService } from '../../../../services/skills.service';

@Component({
  selector: 'landing-xps-skills',
  imports: [CommonModule, EducationsComponent, WorkExperiencesComponent, CertificatesComponent, TabsModule, ButtonModule, RippleModule ],
  standalone: true,
  templateUrl: './landing-xps-skills.component.html',
  styleUrl: './landing-xps-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingXpsSkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;
  private skillsSubject = new BehaviorSubject<Skill[]>([])
  mockSkills: Skill[] = skillMockData;

  constructor(private skillService : SkillsService){
    this.skills$ = this.skillsSubject.asObservable();
  }

  ngOnInit(): void {
    this.loadSkills();
  }

  private loadSkills(){
    this.skillService.getSkills().pipe(
      tap((res: Skill[]) => {
        this.skillsSubject.next(res)
        console.log("Skills loaded successfully !!")
      }),
      catchError((err) => {
        console.error("An error occured while loading skills => ", err);
        this.skillsSubject.next(this.mockSkills);
        return of(this.mockSkills);
      })
    ).subscribe();
  }
}
