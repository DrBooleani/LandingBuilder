import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <img src="robot.png" alt="LandingBuilder Logo" class="w-24 h-24 mb-4">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h1 class="text-2xl font-bold mb-2">Bem-vindo ao LandingBuilder!</h1>
        <p class="text-gray-300">
          Crie e personalize suas próprias landing pages de forma fácil e intuitiva. 
          Use as ferramentas disponíveis para ajustar cores, botões e diversos elementos visuais, 
          deixando tudo do seu jeito!
        </p>
      </div>
    </div>
  `,
  styles: ``
})
export class HomeComponent { }
