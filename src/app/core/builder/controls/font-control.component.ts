import { Component, effect, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-font-control",
  standalone: true,
  template: `
    <div class="p-6 bg-gray-900 text-white rounded-2xl shadow-xl w-80 mx-auto">
      <h3 class="text-xl font-semibold mb-4 text-center">Configurar Fontes</h3>

      <!-- Fonte do Título -->
      <label class="block mb-2">Fonte do Título:</label>
      <select
        [(ngModel)]="titleFont"
        (change)="applyFonts()"
        class="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
      >
        <option *ngFor="let font of fonts()" [value]="font">{{ font }}</option>
      </select>

      <!-- Fonte do Subtítulo -->
      <label class="block mt-4 mb-2">Fonte do Subtítulo:</label>
      <select
        [(ngModel)]="subtitleFont"
        (change)="applyFonts()"
        class="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
      >
        <option *ngFor="let font of fonts()" [value]="font">{{ font }}</option>
      </select>

      <!-- Fonte do Corpo -->
      <label class="block mt-4 mb-2">Fonte do Corpo:</label>
      <select
        [(ngModel)]="bodyFont"
        (change)="applyFonts()"
        class="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
      >
        <option *ngFor="let font of fonts()" [value]="font">{{ font }}</option>
      </select>
    </div>
  `,
  imports: [FormsModule, NgFor],
})
export class FontControlComponent {
  fonts = signal<string[]>([]);

  titleFont = signal<string>("Roboto");
  subtitleFont = signal<string>("Poppins");
  bodyFont = signal<string>("Lato");

  constructor() {
    this.loadGoogleFonts();

    effect(() => {
      this.applyFonts();
    });
  }

  async loadGoogleFonts() {
    try {
      const response = await fetch("https://fonts.google.com/metadata/fonts");
      const data = await response.json();
      this.fonts.set(data.familyMetadataList.map((font: any) => font.family));
    } catch (error) {
      console.error("Erro ao carregar fontes do Google Fonts", error);
    }
  }

  applyFonts() {
    this.loadFont(this.titleFont());
    this.loadFont(this.subtitleFont());
    this.loadFont(this.bodyFont());

    document.documentElement.style.setProperty(
      "--title-font",
      this.titleFont()
    );
    document.documentElement.style.setProperty(
      "--subtitle-font",
      this.subtitleFont()
    );
    document.documentElement.style.setProperty("--body-font", this.bodyFont());
  }

  loadFont(font: string) {
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(
      /\s+/g,
      "+"
    )}:wght@400;700&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
}
