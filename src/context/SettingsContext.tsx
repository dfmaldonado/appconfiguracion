import {
  createContext,
  useContext,
  useMemo,
  useEffect,
} from "react";
import type { PropsWithChildren } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  DEFAULT_SETTINGS,
  SETTINGS_STORAGE_KEY,
} from "../utils/defaultSettings";
import type { Settings, FontSize } from "../types/settings";


interface Ctx {
  settings: Settings;
  updateSettings: (patch: Partial<Settings>) => void;
  resetSettings: () => void;
}

const SettingsContext = createContext<Ctx | null>(null);

export function SettingsProvider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useLocalStorage<Settings>(
    SETTINGS_STORAGE_KEY,
    DEFAULT_SETTINGS
  );

  useEffect(() => {
    const root = document.documentElement;
    if (settings.theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    root.style.setProperty("--base-font-size", fontSizeToPx(settings.fontSize));
    root.style.setProperty(
      "--transition-speed",
      settings.reduceMotion ? "0ms" : "200ms"
    );
  }, [settings]);

  const value = useMemo<Ctx>(
    () => ({
      settings,
      updateSettings: (patch) =>
        setSettings((prev) => ({ ...prev, ...patch })),
      resetSettings: () => setSettings(DEFAULT_SETTINGS),
    }),
    [settings, setSettings]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings debe usarse dentro de SettingsProvider");
  return ctx;
}

function fontSizeToPx(size: FontSize) {
  switch (size) {
    case "small": return "14px";
    case "large": return "18px";
    default: return "16px";
  }
}
