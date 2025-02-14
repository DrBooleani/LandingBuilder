import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  primaryBackground = signal("#ffffff");
  secondaryBackground = signal("#f4f4f4");
  contactFormBackground = signal("#e0e0e0");
  footerBackground = signal("#333333");

  logoUrl = signal<string | null>(null);

  fonts = signal<string[]>([]);

  titleText = signal("Título Principal");
  subtitleText = signal("Subtítulo");
  bodyText = signal("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

  titleFont = signal("Roboto");
  subtitleFont = signal("Open Sans");
  bodyFont = signal("Lato");

  buttonType = signal<"read-more" | "submit">("read-more");
  buttonColor = signal("#3498db");
  buttonRounded = signal(false);
  buttonShadow = signal(false);
  buttonSize = signal<"small" | "medium" | "large">("medium");

  constructor() {
    this.loadGoogleFonts();
  }

  async loadGoogleFonts() {
    try {
      const response = await fetch("https://fonts.google.com/metadata/fonts");
      const data = await response.json();
      this.fonts.set(data.familyMetadataList.map((font: any) => font.family));
    } catch (error) {
      console.error("Erro ao carregar fontes do Google Fonts", error);
    }
  }

  setPrimaryBackground(color: string) {
    this.primaryBackground.set(color);
  }

  setSecondaryBackground(color: string) {
    this.secondaryBackground.set(color);
  }

  setContactFormBackground(color: string) {
    this.contactFormBackground.set(color);
  }

  setFooterBackground(color: string) {
    this.footerBackground.set(color);
  }

  setLogoUrl(url: string | null) {
    this.logoUrl.set(url);
  }

  setTitleText(text: string) {
    this.titleText.set(text);
  }

  setSubtitleText(text: string) {
    this.subtitleText.set(text);
  }

  setBodyText(text: string) {
    this.bodyText.set(text);
  }

  setTitleFont(font: string) {
    this.titleFont.set(font);
  }

  setSubtitleFont(font: string) {
    this.subtitleFont.set(font);
  }

  setBodyFont(font: string) {
    this.bodyFont.set(font);
  }

  setButtonType(type: "read-more" | "submit") {
    this.buttonType.set(type);
  }

  setButtonColor(color: string) {
    this.buttonColor.set(color);
  }

  setButtonRounded(rounded: boolean) {
    this.buttonRounded.set(rounded);
  }

  setButtonShadow(shadow: boolean) {
    this.buttonShadow.set(shadow);
  }

  setButtonSize(size: "small" | "medium" | "large") {
    this.buttonSize.set(size);
  }
}
