import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

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
export class TextControlComponent {
  title: string = "Título Principal";
  subtitle: string = "Subtítulo";
  bodyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  applyChanges() {
    document.documentElement.style.setProperty("--title-text", this.title);
    document.documentElement.style.setProperty(
      "--subtitle-text",
      this.subtitle
    );
    document.documentElement.style.setProperty("--body-text", this.bodyText);
  }
}
