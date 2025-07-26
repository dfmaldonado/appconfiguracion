export type Theme = "light" | "dark";
export type Language = "es" | "en";
export type FontSize = "small" | "medium" | "large";

export interface Settings {
  theme: Theme;
  language: Language;
  fontSize: FontSize;
  notifications: boolean;
  reduceMotion: boolean;
}
