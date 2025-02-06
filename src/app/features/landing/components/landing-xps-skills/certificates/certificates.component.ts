import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Certification } from '../../../../../models/certification.model';
import { CertificationsService } from '../../../../../services/certifications.service';
import { TimelineModule } from 'primeng/timeline';
import certificatesMockData from '../../../../../mocks/certifications.json';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'certificates',
  standalone: true,
  imports: [CommonModule, TimelineModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent implements OnInit {
  certs$: Observable<Certification[]>;
  private certsSubject = new BehaviorSubject<Certification[]>([])
  mockCerts: Certification[] = certificatesMockData;

  constructor(private certService: CertificationsService) {
    this.certs$ = this.certsSubject.asObservable();
  }

  ngOnInit() {
    this.loadCertificates();
  }

  private loadCertificates(){
    this.certService.getCertifications().pipe(
      tap((res: Certification[]) => {
        this.certsSubject.next(res)
        console.log("Certificates loaded successfully !!")
      }),
      catchError((err) => {
        console.error("An error occured while loading certificates => ", err);
        this.certsSubject.next(this.mockCerts);
        return of(this.mockCerts);
      })
    ).subscribe();
  }

}
