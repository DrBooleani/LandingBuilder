import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-color-control",
  imports: [FormsModule],
  template: `
    <div class="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h3 class="text-lg font-bold mb-4">Configurar Cores</h3>

      <label class="block mb-2">Cor Primária:</label>
      <input
        type="color"
        [(ngModel)]="primaryBackground"
        (change)="applyColors()"
        class="w-full mb-4"
      />

      <label class="block mb-2">Cor Secundária:</label>
      <input
        type="color"
        [(ngModel)]="secondaryBackground"
        (change)="applyColors()"
        class="w-full mb-4"
      />

      <label class="block mb-2">Cor do Formulário de Contato:</label>
      <input
        type="color"
        [(ngModel)]="contactFormBackground"
        (change)="applyColors()"
        class="w-full mb-4"
      />

      <label class="block mb-2">Cor do Footer:</label>
      <input
        type="color"
        [(ngModel)]="footerBackground"
        (change)="applyColors()"
        class="w-full mb-4"
      />
    </div>
  `,
  styles: ``,
})
export class ColorControlComponent {
  primaryBackground: string = '#ffffff';
  secondaryBackground: string = '#f4f4f4';
  contactFormBackground: string = '#e0e0e0';
  footerBackground: string = '#333333';

  applyColors() {
    document.documentElement.style.setProperty('--primary-bg', this.primaryBackground);
    document.documentElement.style.setProperty('--secondary-bg', this.secondaryBackground);
    document.documentElement.style.setProperty('--contact-form-bg', this.contactFormBackground);
    document.documentElement.style.setProperty('--footer-bg', this.footerBackground);
  }
}
