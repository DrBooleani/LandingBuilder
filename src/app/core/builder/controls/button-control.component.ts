import { CommonModule } from "@angular/common";
import { Component, OnInit, effect } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-button-control",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-4 bg-gray-800 text-white rounded-lg">
      <h2 class="text-lg font-bold mb-4">Configurar Botão</h2>

      <label class="block mb-2">Tipo de Botão:</label>
      <select [(ngModel)]="settingsService.buttonType" class="p-2 w-full rounded bg-gray-700 text-white">
        <option value="read-more">Leia Mais</option>
        <option value="submit">Enviar</option>
      </select>

      <label class="block mt-4 mb-2">Cor:</label>
      <input [(ngModel)]="settingsService.buttonColor" type="color" class="w-full h-10 p-1 rounded" />

      <div class="mt-4">
        <label class="flex items-center gap-2">
          <input type="checkbox" [(ngModel)]="settingsService.buttonRounded" />
          Arredondado
        </label>
      </div>

      <div class="mt-2">
        <label class="flex items-center gap-2">
          <input type="checkbox" [(ngModel)]="settingsService.buttonShadow" />
          Sombra
        </label>
      </div>

      <label class="block mt-4 mb-2">Tamanho:</label>
      <select [(ngModel)]="settingsService.buttonSize" class="p-2 w-full rounded bg-gray-700 text-white">
        <option value="small">Pequeno</option>
        <option value="medium">Médio</option>
        <option value="large">Grande</option>
      </select>

      <button
        [ngStyle]="{ 'background-color': settingsService.buttonColor() }"
        [ngClass]="buttonClasses"
        class="mt-6"
      >
        {{ settingsService.buttonType() === "read-more" ? "Leia Mais" : "Enviar" }}
      </button>
    </div>
  `,
})
export class ButtonControlComponent {
  constructor(public settingsService: SettingsService) {}

  get buttonClasses() {
    return `px-4 py-2 transition-all duration-300 ${
      this.settingsService.buttonRounded() ? "rounded-full" : "rounded-md"
    } ${this.settingsService.buttonShadow() ? "shadow-lg" : ""} ${
      this.settingsService.buttonSize() === "small"
        ? "text-sm"
        : this.settingsService.buttonSize() === "large"
        ? "text-lg"
        : "text-base"
    }`;
  }
}
