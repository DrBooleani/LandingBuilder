import { Component } from "@angular/core";
import { NavbarComponent } from "../../core/client/navbar/navbar.component";
import { HeroSectionComponent } from "../../core/client/hero-section/hero-section.component";
import { FeaturesComponent } from "../../core/client/features/features.component";
import { CarouselComponent } from "../../core/client/carousel/carousel.component";
import { ContactFormComponent } from "../../core/client/contact-form/contact-form.component";
import { FooterComponent } from "../../core/client/footer/footer.component";

@Component({
  selector: "app-landing",
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    FeaturesComponent,
    CarouselComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero-section></app-hero-section>
    <app-features></app-features>
    <app-carousel></app-carousel>
    <app-contact-form></app-contact-form>
    <app-footer></app-footer>
  `,
  styles: ``,
})
export class LandingComponent {}
