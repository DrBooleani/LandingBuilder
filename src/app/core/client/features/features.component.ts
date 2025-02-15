import { Component, computed, inject } from "@angular/core";
import { SettingsService } from "../../services/settings/settings.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-features",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngStyle]="{ 'background-color': secondaryBackground() }" class="py-16 px-6 flex flex-col md:flex-row items-center gap-8">
      <div class="w-full md:w-1/3">
        <div class="w-full h-60 bg-gray-300"></div>
      </div>
      <div class="w-full md:w-2/3 text-center md:text-left">
        <h2 [ngStyle]="{ 'font-family': titleFont() }" class="text-3xl font-bold">{{ titleText() }}</h2>
        <p [ngStyle]="{ 'font-family': bodyFont() }" class="text-gray-700 mt-4">{{ bodyText() }}</p>
        <button [ngStyle]="{ 'background-color': buttonColor(), 'border-radius': buttonRounded() ? '8px' : '0px' }" 
                class="mt-6 px-6 py-2 text-white font-semibold shadow-md">Leia mais</button>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  private settings = inject(SettingsService);
  secondaryBackground = computed(() => this.settings.secondaryBackground());
  titleText = computed(() => this.settings.titleText());
  bodyText = computed(() => this.settings.bodyText());
  titleFont = computed(() => this.settings.titleFont());
  bodyFont = computed(() => this.settings.bodyFont());
  buttonColor = computed(() => this.settings.buttonColor());
  buttonRounded = computed(() => this.settings.buttonRounded());
}
