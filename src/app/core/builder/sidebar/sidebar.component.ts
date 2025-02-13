import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [NgIf, NgFor]
})
export class SidebarComponent {
  collapsed = false;
  menuItems = [
    { label: "Título", icon: "📝" },
    { label: "Logo", icon: "📷" },
    { label: "Cores", icon: "🎨" },
    { label: "Fontes", icon: "🔤" },
    { label: "Botões", icon: "🔘" },
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
