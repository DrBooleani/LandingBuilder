import { Component, computed, inject } from "@angular/core";
import { SettingsService } from "../../services/settings/settings.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [ngStyle]="{ 'background-color': primaryBackground(), 'color': colorText() }" class="py-4 px-6 flex items-center justify-between">
      <div class="text-lg font-bold">
        <img *ngIf="logoUrl()" [src]="logoUrl()" alt="Logo" class="h-10">
        <span *ngIf="!logoUrl()">Logo</span>
      </div>
      <ul class="hidden md:flex space-x-6">
        <li><a href="#" [ngStyle]="{ 'color': colorText() }" class="hover:opacity-80">Home</a></li>
        <li><a href="#" [ngStyle]="{ 'color': colorText() }" class="hover:opacity-80">Sobre Nós</a></li>
        <li><a href="#" [ngStyle]="{ 'color': colorText() }" class="hover:opacity-80">Conteúdo</a></li>
        <li><a href="#" [ngStyle]="{ 'color': colorText() }" class="hover:opacity-80">Contato</a></li>
        <li><a href="#" [ngStyle]="{ 'color': colorText() }" class="hover:opacity-80">Adquira</a></li>
      </ul>
      <button class="md:hidden" [ngStyle]="{ 'color': colorText() }">☰</button>
    </nav>
  `,
})
export class NavbarComponent {
  private settings = inject(SettingsService);
  logoUrl = computed(() => this.settings.logoUrl());
  primaryBackground = computed(() => this.settings.primaryBackground());
  colorText = computed(() => this.settings.colorText());
}
