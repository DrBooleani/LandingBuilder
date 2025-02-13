import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [NgIf, NgFor, RouterModule]
})
export class SidebarComponent {
  collapsed = false;
  menuItems = [
    { label: "Textos", icon: "📝", url: 'builder/texts' },
    { label: "Logo", icon: "📷", url: 'builder/logo' },
    { label: "Cores", icon: "🎨", url: 'builder/colors' },
    { label: "Fontes", icon: "🔤", url: 'builder/fonts'},
    { label: "Botões", icon: "🔘", url: 'builder/button' },
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
