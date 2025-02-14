import { Component, computed, inject } from "@angular/core";
import { SettingsService } from "../../services/settings/settings.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngStyle]="{ 'background-color': primaryBackground() }" class="text-center py-20">
      <h1 class="text-4xl font-bold" [ngStyle]="{ 'font-family': titleFont() }">{{ titleText() }}</h1>
      <p class="text-lg mt-2" [ngStyle]="{ 'font-family': subtitleFont() }">{{ subtitleText() }}</p>
    </section>
  `,
})
export class HeroSectionComponent {
  private settings = inject(SettingsService);
  titleText = computed(() => this.settings.titleText());
  subtitleText = computed(() => this.settings.subtitleText());
  primaryBackground = computed(() => this.settings.primaryBackground());
  titleFont = computed(() => this.settings.titleFont());
  subtitleFont = computed(() => this.settings.subtitleFont());
}
