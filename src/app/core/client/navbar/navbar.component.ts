import { Component, computed, inject } from "@angular/core";
import { SettingsService } from "../../services/settings/settings.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [ngStyle]="{ 'background-color': primaryBackground() }" class="text-inherit py-4 px-6 flex items-center justify-between">
      <div class="text-lg font-bold">
        <img *ngIf="logoUrl()" [src]="logoUrl()" alt="Logo" class="h-10">
        <span *ngIf="!logoUrl()">Logo</span>
      </div>
      <ul class="hidden md:flex space-x-6">
        <li><a href="#" class="hover:text-gray-400">Home</a></li>
        <li><a href="#" class="hover:text-gray-400">Sobre Nós</a></li>
        <li><a href="#" class="hover:text-gray-400">Conteúdo</a></li>
        <li><a href="#" class="hover:text-gray-400">Contato</a></li>
        <li><a href="#" class="hover:text-gray-400">Adquira</a></li>
      </ul>
      <button class="md:hidden text-white">☰</button>
    </nav>
  `,
})
export class NavbarComponent {
  private settings = inject(SettingsService);
  logoUrl = computed(() => this.settings.logoUrl());
  primaryBackground = computed(() => this.settings.primaryBackground());
}
