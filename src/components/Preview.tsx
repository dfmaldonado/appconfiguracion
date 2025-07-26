import { useSettings } from "../context/SettingsContext";

const texts = {
  es: {
    greeting: "Hola, mundo",
    desc: "Este es un texto de ejemplo para ver tu configuración.",
  },
  en: {
    greeting: "Hello, world",
    desc: "This is a sample text to preview your configuration.",
  },
};

export default function Preview() {
  const { settings } = useSettings();
  const t = texts[settings.language];

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow h-fit">
      <h2 className="text-xl font-semibold mb-2">{t.greeting} 👋</h2>
      <p className="mb-4">{t.desc}</p>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li><b>Tema:</b> {settings.theme}</li>
        <li><b>Idioma:</b> {settings.language}</li>
        <li><b>Fuente:</b> {settings.fontSize}</li>
        <li><b>Notificaciones:</b> {settings.notifications ? "On" : "Off"}</li>
        <li><b>Reduce Motion:</b> {settings.reduceMotion ? "Sí" : "No"}</li>
      </ul>
    </div>
  );
}
