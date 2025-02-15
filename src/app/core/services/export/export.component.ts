import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ExportService {
  exportLandingPage() {
    const initialHTML = this.generateInitialHTML();
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    iframe.contentDocument?.write(initialHTML);
    iframe.contentDocument?.close();

    iframe.onload = () => {
      const styles = this.extractStylesFromIframe(iframe);
      const finalHTML = this.generateFinalHTML(styles);
      this.downloadFile("index.html", finalHTML, "text/html");
      document.body.removeChild(iframe);
    };
  }

  generateInitialHTML(): string {
    const appElement = document.querySelector("app-landing");
    let appContent = "";

    if (appElement) {
      const cloned = appElement.cloneNode(true) as HTMLElement;
      const exportButton = cloned.querySelector(".export-button");
      if (exportButton) exportButton.remove();
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

    let valid = true;

    if (!name) document.getElementById("nameError").classList.remove("hidden");
    else document.getElementById("nameError").classList.add("hidden");

    if (!email || !email.includes("@")) document.getElementById("emailError").classList.remove("hidden");
    else document.getElementById("emailError").classList.add("hidden");

    if (!message) document.getElementById("messageError").classList.remove("hidden");
    else document.getElementById("messageError").classList.add("hidden");

    if (!name || !email || !message) return;

    const subject = encodeURIComponent("Contato via site");
    const body = encodeURIComponent('Nome: ' + name + 'Email: ' + email + 'Mensagem: ' + message);
    window.location.href = "mailto:" + contactEmail + "?subject=" + subject + "&body=" + body;
  });
</script>
</body>
</html>`;
  }

  extractStylesFromIframe(iframe: HTMLIFrameElement): string {
    const styles = iframe.contentDocument?.querySelectorAll("style");
    let combinedStyles = "";
    styles?.forEach((style) => (combinedStyles += style.innerHTML + "\n"));
    return combinedStyles;
  }

  generateFinalHTML(styles: string): string {
    const appElement = document.querySelector("app-landing");
    let appContent = "";

    if (appElement) {
      const cloned = appElement.cloneNode(true) as HTMLElement;
      const exportButton = cloned.querySelector(".export-button");
      if (exportButton) exportButton.remove();
      appContent = cloned.innerHTML;
    }

    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <style>${styles}</style>
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

    let valid = true;

    if (!name) document.getElementById("nameError").classList.remove("hidden");
    else document.getElementById("nameError").classList.add("hidden");

    if (!email || !email.includes("@")) document.getElementById("emailError").classList.remove("hidden");
    else document.getElementById("emailError").classList.add("hidden");

    if (!message) document.getElementById("messageError").classList.remove("hidden");
    else document.getElementById("messageError").classList.add("hidden");

    if (!name || !email || !message) return;

    const subject = encodeURIComponent("Contato via site");
    const body = encodeURIComponent('Nome: ' + name + 'Email: ' + email + 'Mensagem: ' + message);
    window.location.href = "mailto:" + contactEmail + "?subject=" + subject + "&body=" + body;
  });
</script>
</body>
</html>`;
  }

  downloadFile(filename: string, content: string, type: string) {
    const blob = new Blob([content], { type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}