import SettingsForm from "./components/SettingsForm";
import Preview from "./components/Preview";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-4">
        <SettingsForm />
        <Preview />
      </div>
    </main>
  );
}