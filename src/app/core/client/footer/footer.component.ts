import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-black text-white text-center py-4">
      &copy; {{ currentYear }} - Todos os direitos reservados.
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
