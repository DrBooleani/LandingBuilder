import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-color-control",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h3 class="text-lg font-bold mb-4">Configurar Cores</h3>

      <label class="block mb-2">Cor Primária:</label>
      <input type="color" [(ngModel)]="settingsService.primaryBackground" class="w-full mb-4" />

      <label class="block mb-2">Cor Secundária:</label>
      <input type="color" [(ngModel)]="settingsService.secondaryBackground" class="w-full mb-4" />

      <label class="block mb-2">Cor do Formulário de Contato:</label>
      <input type="color" [(ngModel)]="settingsService.contactFormBackground" class="w-full mb-4" />

      <label class="block mb-2">Cor do Footer:</label>
      <input type="color" [(ngModel)]="settingsService.footerBackground" class="w-full mb-4" />
    </div>
  `,
})
export class ColorControlComponent {
  constructor(public settingsService: SettingsService) {}
}
