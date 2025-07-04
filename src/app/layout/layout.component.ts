import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { LandingComponent } from "./landing/landing.component";
import { EmptyComponent } from "./empty/empty.component";

@Component({
  selector: 'watojoel-layout',
  imports: [LandingComponent, EmptyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  layout: string = 'landing'; // Set landing as default
  currentChildrenPath: string = '';
  private subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.updateLayoutData(); // Update on initial load

    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd) // Filter NavigationEnd events
      )
      .subscribe(() => this.updateLayoutData());
  }

  ngOnDestroy(): void{
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateChildrenPath(): void {
    const children = this.route.firstChild?.children;
    this.currentChildrenPath = children ? children[0].snapshot.url.join('/') : '';
  }

  private updateLayoutData(): void {
    const routeData = this.route.snapshot.data;
    this.layout = routeData?.['layout'] || 'landing'; // Use landing as default if not defined
  }

}
