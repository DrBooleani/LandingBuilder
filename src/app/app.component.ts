import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./core/builder/sidebar/sidebar.component"; // Importação da Sidebar

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="flex">
      <app-sidebar></app-sidebar>
      <div class="flex-1">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {}
