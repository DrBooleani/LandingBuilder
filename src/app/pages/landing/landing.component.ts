import { Component, inject } from "@angular/core";
import { NavbarComponent } from "../../core/client/navbar/navbar.component";
import { HeroSectionComponent } from "../../core/client/hero-section/hero-section.component";
import { FeaturesComponent } from "../../core/client/features/features.component";
import { CarouselComponent } from "../../core/client/carousel/carousel.component";
import { ContactFormComponent } from "../../core/client/contact-form/contact-form.component";
import { FooterComponent } from "../../core/client/footer/footer.component";
import { ExportService } from "../../core/services/export/export.component";

@Component({
  selector: "app-landing",
  standalone: true,
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

    <div class="fixed bottom-5 right-5 export-button">
      <button
        (click)="exportLandingPage()"
        class="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        📥 Exportar Página
      </button>
    </div>
  `,
  styles: ``,
})
export class LandingComponent {
  private exportService = inject(ExportService);

  exportLandingPage() {
    this.exportService.exportLandingPage();
  }
}
