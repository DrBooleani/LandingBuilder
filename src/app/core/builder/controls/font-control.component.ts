import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgFor, CommonModule } from "@angular/common";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-font-control",
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  template: `
    <div class="p-6 bg-gray-900 text-white rounded-2xl shadow-xl w-80 mx-auto">
      <h3 class="text-xl font-semibold mb-4 text-center">Configurar Fontes</h3>

      <!-- Fonte do Título -->
      <label class="block mb-2">Fonte do Título:</label>
      <select
        [(ngModel)]="settingsService.titleFont"
        class="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
      >
        <option *ngFor="let font of settingsService.fonts()" [value]="font">
          {{ font }}
        </option>
      </select>

      <!-- Fonte do Subtítulo -->
      <label class="block mt-4 mb-2">Fonte do Subtítulo:</label>
      <select
        [(ngModel)]="settingsService.subtitleFont"
        class="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
      >
        <option *ngFor="let font of settingsService.fonts()" [value]="font">
          {{ font }}
        </option>
      </select>

      <!-- Fonte do Corpo -->
      <label class="block mt-4 mb-2">Fonte do Corpo:</label>
      <select
        [(ngModel)]="settingsService.bodyFont"
        class="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
      >
        <option *ngFor="let font of settingsService.fonts()" [value]="font">
          {{ font }}
        </option>
      </select>
    </div>
  `,
})
export class FontControlComponent {
  constructor(public settingsService: SettingsService) {}
}
