import { useSettings } from "../context/SettingsContext.jsx";

const TEXT = {
  en: { title: "Welcome" },
  th: { title: "ยินดีต้อนรับ" },
};

export default function Header() {
  const { language } = useSettings();
  return (
    <header className="card header">
      <h1>{TEXT[language].title}</h1>
    </header>
  );
}
