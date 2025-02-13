import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./core/builder/sidebar/sidebar.component"; // Importação da Sidebar

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="flex h-screen">
      <app-sidebar class="w-20 md:w-64 shrink-0"></app-sidebar>

      <div class="flex-1 p-6 overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {}
