import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ExportService {
  exportLandingPage() {
    const htmlContent = this.generateHTML();
    this.downloadFile("index.html", htmlContent, "text/html");
  }

  private generateHTML(): string {
    const appElement = document.querySelector("app-landing");
    let appContent = "";

    if (appElement) {
      const cloned = appElement.cloneNode(true) as HTMLElement;
      const exportButton = cloned.querySelector(".export-button");
      if (exportButton) {
        exportButton.remove();
      }

      appContent = cloned.innerHTML;
    }

    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-900">
  ${appContent}
<script>
 document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const contactEmail = document.querySelector(".contact-email").textContent.trim();

  // Validar campos
  let valid = true;

  if (!name) {
    document.getElementById("nameError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("nameError").classList.add("hidden");
  }

  if (!email || email.indexOf("@") === -1) {
    document.getElementById("emailError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("emailError").classList.add("hidden");
  }

  if (!message) {
    document.getElementById("messageError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("messageError").classList.add("hidden");
  }

  if (!valid) return;

  // Envio via email (usando concatenação)
  const subject = encodeURIComponent("Contato via site");
  const body = encodeURIComponent(
    "Nome: " + name + "\nEmail: " + email + "\nMensagem: " + message
  );

  window.location.href = "mailto:" + contactEmail + "?subject=" + subject + "&body=" + body;
});
</script>
</body>
</html>`;
  }

  private downloadFile(filename: string, content: string, type: string) {
    const blob = new Blob([content], { type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
