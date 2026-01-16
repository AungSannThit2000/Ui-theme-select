import Header from "./components/Header.jsx";
import SettingsPanel from "./components/SettingsPanel.jsx";
import PreviewCard from "./components/PreviewCard.jsx";
import { useSettings } from "./context/SettingsContext.jsx";

export default function App() {
  const { theme } = useSettings();

  return (
    <div className={theme === "dark" ? "app" : "app"}>
      <div className="container">
        <Header />
        <div className="grid">
          <SettingsPanel />
          <PreviewCard />
        </div>
      </div>
    </div>
  );
}
