import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { HeroComponent } from './sections/hero/hero.component';
import { OurServicesComponent } from './sections/our-services/our-services.component';
import { SponsorsComponent } from './sections/sponsors/sponsors.component';
import { EventsComponent } from './sections/events/events.component';
import { GetStartedComponent } from './sections/get-started/get-started.component';
import { FqsComponent } from './sections/fqs/fqs.component';
import { FeaturesComponent } from './sections/features/features.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    HeroComponent,
    AboutUsComponent,
    OurServicesComponent,
    SponsorsComponent,
    EventsComponent,
    GetStartedComponent,
    FqsComponent,
    FeaturesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ia-robot-1';
}
