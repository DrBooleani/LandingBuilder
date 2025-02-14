import { Component, Signal, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-carousel-control",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 border rounded-md">
      <h3 class="text-lg font-semibold">Configurar Carrossel</h3>

      <div class="mt-2 space-y-2">
        <div *ngFor="let image of carouselImages(); let i = index" class="flex items-center gap-2">
          <img [src]="image" alt="Imagem {{ i + 1 }}" class="w-16 h-16 object-cover border rounded-md" />
          <button (click)="removeImage(i)" class="text-red-500">Remover</button>
        </div>
      </div>

      <div *ngIf="carouselImages().length < 4; else moreThan4">
      <input #imageUrl type="text" placeholder="URL da imagem" class="w-full p-2 border rounded mt-2"/>
      <button (click)="addImage(imageUrl.value); imageUrl.value=''" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Adicionar Imagem
      </button>
      </div>
      <ng-template #moreThan4>
        <p class="text-red-500">Não pode adicionar mais de 4 imagens!</p>
      </ng-template>
    </div>
  `,
})
export class CarouselControlComponent {
  private settingsService = inject(SettingsService);
  carouselImages: Signal<string[]> = computed(() => this.settingsService.carouselImages());

  addImage(url: string) {
    if (url) {
      this.settingsService.addCarouselImage(url);
    }
  }

  removeImage(index: number) {
    this.settingsService.removeCarouselImage(index);
  }
}
