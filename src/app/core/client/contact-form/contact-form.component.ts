import { Component, OnInit, Signal, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: "app-contact-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="bg-gray-100 text-gray-900 p-8">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Formulário -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Contato</h3>

          <form [formGroup]="contactForm" (ngSubmit)="sendMessage()">
            <label class="block text-sm font-medium">Nome completo:</label>
            <input
              type="text"
              formControlName="name"
              class="w-full p-2 border rounded mt-1"
              placeholder="Seu nome"
            />
            <div
              *ngIf="
                contactForm.get('name')?.invalid &&
                contactForm.get('name')?.touched
              "
              class="text-red-600 text-sm"
            >
              Nome é obrigatório.
            </div>

            <label class="block text-sm font-medium mt-3">E-mail:</label>
            <input
              type="email"
              formControlName="email"
              class="w-full p-2 border rounded mt-1"
              placeholder="seu@email.com"
            />
            <div
              *ngIf="
                contactForm.get('email')?.invalid &&
                contactForm.get('email')?.touched
              "
              class="text-red-600 text-sm"
            >
              E-mail inválido.
            </div>

            <label class="block text-sm font-medium mt-3">Mensagem:</label>
            <textarea
              formControlName="message"
              class="w-full p-2 border rounded mt-1"
              placeholder="Escreva sua mensagem..."
            ></textarea>
            <div
              *ngIf="
                contactForm.get('message')?.invalid &&
                contactForm.get('message')?.touched
              "
              class="text-red-600 text-sm"
            >
              Mensagem é obrigatória.
            </div>

            <button
              type="submit"
              class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
              [disabled]="contactForm.invalid"
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
              <p class="text-gray-700">{{ contactEmail() }}</p>
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
  private fb = inject(FormBuilder);

  contactForm: FormGroup = new FormGroup({});

  contactEmail: Signal<string> = computed(() =>
    this.settingsService.contactEmail()
  );

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
    });
  }

  sendMessage() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      const subject = encodeURIComponent("Contato via site");
      const body = encodeURIComponent(
        `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
      );
      window.location.href = `mailto:${this.contactEmail()}?subject=${subject}&body=${body}`;
    }
  }
}
