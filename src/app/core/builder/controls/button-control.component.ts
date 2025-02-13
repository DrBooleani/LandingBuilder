import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-button-control",
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-4 bg-gray-800 text-white rounded-lg">
      <h2 class="text-lg font-bold mb-4">Configurar Botão</h2>

      <label class="block mb-2">Tipo de Botão:</label>
      <select
        [(ngModel)]="buttonType"
        class="p-2 w-full rounded bg-gray-700 text-white"
      >
        <option value="read-more">Leia Mais</option>
        <option value="submit">Submit</option>
      </select>

      <label class="block mt-4 mb-2">Cor:</label>
      <input
        [(ngModel)]="buttonColor"
        type="color"
        class="w-full h-10 p-1 rounded"
      />

      <div class="mt-4">
        <label class="flex items-center gap-2">
          <input type="checkbox" [(ngModel)]="rounded" /> Arredondado
        </label>
      </div>

      <div class="mt-2">
        <label class="flex items-center gap-2">
          <input type="checkbox" [(ngModel)]="shadow" /> Sombra
        </label>
      </div>

      <label class="block mt-4 mb-2">Tamanho:</label>
      <select
        [(ngModel)]="size"
        class="p-2 w-full rounded bg-gray-700 text-white"
      >
        <option value="small">Pequeno</option>
        <option value="medium">Médio</option>
        <option value="large">Grande</option>
      </select>

      <button
        [ngStyle]="{ 'background-color': buttonColor }"
        [ngClass]="buttonClasses"
        class="mt-6"
      >
        {{ buttonType === "read-more" ? "Leia Mais" : "Enviar" }}
      </button>
    </div>
  `,
  styles: ``,
})
export class ButtonControlComponent {
  buttonType: "read-more" | "submit" = "read-more";
  buttonColor: string = "#3498db";
  rounded: boolean = false;
  shadow: boolean = false;
  size: "small" | "medium" | "large" = "medium";

  get buttonClasses() {
    return `px-4 py-2 transition-all duration-300 ${
      this.rounded ? "rounded-full" : "rounded-md"
    } ${this.shadow ? "shadow-lg" : ""} ${
      this.size === "small"
        ? "text-sm"
        : this.size === "large"
        ? "text-lg"
        : "text-base"
    }`;
  }
}
