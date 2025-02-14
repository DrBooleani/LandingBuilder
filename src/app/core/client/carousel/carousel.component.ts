import { Component, Signal, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="text-center py-10 bg-gray-100">
      <h2 class="text-3xl font-bold text-gray-800">{{ titleText() }}</h2>
      <p class="text-lg text-gray-600 mt-2">{{ subtitleText() }}</p>

      <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div *ngFor="let image of carouselImages(); let i = index">
          <img [src]="image" alt="Carrossel {{ i + 1 }}" class="w-full h-48 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  `,
})
export class CarouselComponent {
  private settingsService = inject(SettingsService);

  titleText: Signal<string> = computed(() => this.settingsService.titleText());
  subtitleText: Signal<string> = computed(() => this.settingsService.subtitleText());
  carouselImages: Signal<string[]> = computed(() => this.settingsService.carouselImages());
}
