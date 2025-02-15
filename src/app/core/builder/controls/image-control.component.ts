import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-image-control",
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <div class="p-6 bg-gray-900 text-white rounded-2xl shadow-xl w-80 mx-auto">
      <h3 class="text-xl font-semibold mb-4 text-center">Configurar Logo</h3>

      <div class="flex flex-col items-center">
        <div *ngIf="settings.logoUrl()" class="mb-4 relative group">
          <img
            [src]="settings.logoUrl()"
            alt="Logo Preview"
            class="h-24 w-24 object-contain bg-white rounded-full shadow-lg border-2 border-gray-600"
          />
          <button
            (click)="removeLogo()"
            class="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ✕
          </button>
        </div>

        <label *ngIf="!settings.logoUrl()"
          class="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-gray-400 transition-all"
        >
          <div class="text-center">
            <p class="text-gray-400">Clique ou arraste uma imagem</p>
            <input
              type="file"
              (change)="onFileSelected($event)"
              accept="image/*"
              class="hidden"
            />
          </div>
        </label>

        <button
          *ngIf="settings.logoUrl()"
          (click)="removeLogo()"
          class="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition-all"
        >
          Remover Logo
        </button>
      </div>
    </div>
  `,
})
export class ImageControlComponent {
  settings = inject(SettingsService);

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.settings.setLogoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  removeLogo() {
    this.settings.setLogoUrl(null);
  }
}
