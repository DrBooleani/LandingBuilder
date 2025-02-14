import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/client/navbar/navbar.component";
import { HeroSectionComponent } from "../../core/client/hero-section/hero-section.component";

@Component({
  selector: 'app-landing',
  imports: [NavbarComponent, HeroSectionComponent],
  template: `
    <app-navbar></app-navbar>
    <app-hero-section></app-hero-section>
  `,
  styles: ``
})
export class LandingComponent {

}
