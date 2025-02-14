import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-text-control",
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h3 class="text-lg font-bold mb-4">Configurar Textos</h3>

      <label class="block mb-2">Título:</label>
      <input
        type="text"
        [(ngModel)]="title"
        (input)="applyChanges()"
        class="w-full p-2 mb-4 border rounded text-black bg-white"
      />

      <label class="block mb-2">Subtítulo:</label>
      <input
        type="text"
        [(ngModel)]="subtitle"
        (input)="applyChanges()"
        class="w-full p-2 mb-4 border rounded text-black bg-white"
      />

      <label class="block mb-2">Texto do Corpo:</label>
      <textarea
        [(ngModel)]="bodyText"
        (input)="applyChanges()"
        class="w-full p-2 mb-4 border rounded text-black bg-white"
      ></textarea>
    </div>
  `,
})
export class TextControlComponent implements OnInit {
  settings = inject(SettingsService);

  title!: string;
  subtitle!: string;
  bodyText!: string;

  ngOnInit() {
    this.title = this.settings.titleText();
    this.subtitle = this.settings.subtitleText();
    this.bodyText = this.settings.bodyText();
  }

  applyChanges() {
    this.settings.setTitleText(this.title);
    this.settings.setSubtitleText(this.subtitle);
    this.settings.setBodyText(this.bodyText);

    document.documentElement.style.setProperty("--title-text", this.title);
    document.documentElement.style.setProperty("--subtitle-text", this.subtitle);
    document.documentElement.style.setProperty("--body-text", this.bodyText);
  }
}
