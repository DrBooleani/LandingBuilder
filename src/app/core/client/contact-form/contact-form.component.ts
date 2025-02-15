import { Component, OnInit, Signal, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-contact-form",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-100 text-gray-900 p-8">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Formulário -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Contato</h3>

          <form id="contactForm" (ngSubmit)="sendMessage()">
            <label class="block text-sm font-medium">Nome completo:</label>
            <input
              type="text"
              id="name"
              class="w-full p-2 border rounded mt-1"
              placeholder="Seu nome"
              required
            />
            <div id="nameError" class="text-red-600 text-sm hidden">
              Nome é obrigatório.
            </div>

            <label class="block text-sm font-medium mt-3">E-mail:</label>
            <input
              type="email"
              id="email"
              class="w-full p-2 border rounded mt-1"
              placeholder="seu@email.com"
              required
            />
            <div id="emailError" class="text-red-600 text-sm hidden">
              E-mail inválido.
            </div>

            <label class="block text-sm font-medium mt-3">Mensagem:</label>
            <textarea
              id="message"
              class="w-full p-2 border rounded mt-1"
              placeholder="Escreva sua mensagem..."
              required
            ></textarea>
            <div id="messageError" class="text-red-600 text-sm hidden">
              Mensagem é obrigatória.
            </div>

            <button
              type="submit"
              class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <!-- Informações de Contato -->
        <div class="flex flex-col justify-center space-y-4">
          <div class="flex items-center space-x-3">
            <span class="text-2xl">📧</span>
            <div>
              <p class="text-lg font-semibold">E-mail</p>
              <p class="text-gray-700 contact-email">{{ contactEmail() }}</p>
            </div>
          </div>

          <div class="flex items-center space-x-3">
            <span class="text-2xl">📞</span>
            <div>
              <p class="text-lg font-semibold">Telefone</p>
              <p class="text-gray-700">(11) 99999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ContactFormComponent implements OnInit {
  private settingsService = inject(SettingsService);

  contactEmail: Signal<string> = computed(() =>
    this.settingsService.contactEmail()
  );

  ngOnInit(): void {}

  sendMessage() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    let isValid = true;

    // Validação do nome
    if (!nameInput.value) {
      nameError?.classList.remove('hidden');
      isValid = false;
    } else {
      nameError?.classList.add('hidden');
    }

    // Validação do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value || !emailPattern.test(emailInput.value)) {
      emailError?.classList.remove('hidden');
      isValid = false;
    } else {
      emailError?.classList.add('hidden');
    }

    // Validação da mensagem
    if (!messageInput.value) {
      messageError?.classList.remove('hidden');
      isValid = false;
    } else {
      messageError?.classList.add('hidden');
    }

    if (isValid) {
      const subject = encodeURIComponent("Contato via site");
      const body = encodeURIComponent(
        `Nome: ${nameInput.value}\nEmail: ${emailInput.value}\nMensagem: ${messageInput.value}`
      );
      window.location.href = `mailto:${this.contactEmail()}?subject=${subject}&body=${body}`;
    }
  }
}