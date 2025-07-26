import { useSettings } from "../context/SettingsContext";

export default function SettingsForm() {
  const { settings, updateSettings, resetSettings } = useSettings();

  return (
    <form
      className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="text-xl font-semibold mb-4">Configuración</h2>

      <div className="flex flex-col gap-3">
        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Tema</span>
          <select
            value={settings.theme}
            onChange={(e) => updateSettings({ theme: e.target.value as any })}
            className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-transparent"
          >
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Idioma</span>
          <select
            value={settings.language}
            onChange={(e) => updateSettings({ language: e.target.value as any })}
            className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-transparent"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Tamaño de fuente</span>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
            className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-transparent"
          >
            <option value="small">Pequeña</option>
            <option value="medium">Mediana</option>
            <option value="large">Grande</option>
          </select>
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm font-medium">Notificaciones</span>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => updateSettings({ notifications: e.target.checked })}
            className="h-4 w-4"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm font-medium">Reducir animaciones</span>
          <input
            type="checkbox"
            checked={settings.reduceMotion}
            onChange={(e) => updateSettings({ reduceMotion: e.target.checked })}
            className="h-4 w-4"
          />
        </label>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={resetSettings}
          className="rounded-md bg-blue-600 text-white px-4 py-2 hover:opacity-90"
        >
          Restablecer
        </button>
      </div>
    </form>
  );
}
