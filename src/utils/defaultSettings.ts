import { Settings } from "../types/settings";

export const DEFAULT_SETTINGS: Settings = {
  theme: "light",
  language: "es",
  fontSize: "medium",
  notifications: true,
  reduceMotion: false,
};

export const SETTINGS_STORAGE_KEY = "app-settings-v1";
