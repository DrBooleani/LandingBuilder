import { Component, Signal, inject, computed } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-contact-control",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 bg-white shadow-md rounded-lg">
      <h3 class="text-lg font-semibold mb-2">Configuração de Contato</h3>

      <label class="block text-sm font-medium">E-mail:</label>
      <input
        type="email"
        [value]="contactEmail()"
        (input)="updateEmail($event)"
        class="w-full p-2 border rounded mt-1"
      />

      <label class="block text-sm font-medium mt-3">Telefone:</label>
      <input
        type="text"
        [value]="contactPhone()"
        (input)="updatePhone($event)"
        class="w-full p-2 border rounded mt-1"
      />
    </div>
  `,
})
export class ContactControlComponent {
  private settingsService = inject(SettingsService);

  contactEmail: Signal<string> = computed(() => this.settingsService.contactEmail());
  contactPhone: Signal<string> = computed(() => this.settingsService.contactPhone());

  updateEmail(event: Event) {
    const input = event.target as HTMLInputElement;
    this.settingsService.setContactEmail(input.value);
  }

  updatePhone(event: Event) {
    const input = event.target as HTMLInputElement;
    this.settingsService.setContactPhone(input.value);
  }
}
