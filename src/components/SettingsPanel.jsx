import { useSettings } from "../context/SettingsContext.jsx";

export default function SettingsPanel() {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <section className="card">
      <h2>Settings</h2>

      <div className="row">
        <div className="label">Theme</div>
        <div className="controls">
          <button
            type="button"
            className={`btn ${theme === "light" ? "active" : ""}`}
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            type="button"
            className={`btn ${theme === "dark" ? "active" : ""}`}
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
        </div>
      </div>

      <div className="row">
        <div className="label">Language</div>
        <div className="controls">
          <button
            type="button"
            className={`btn ${language === "en" ? "active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={`btn ${language === "th" ? "active" : ""}`}
            onClick={() => setLanguage("th")}
          >
            TH
          </button>
        </div>
      </div>

      <div className="row">
        <div className="label">Actions</div>
        <div className="controls">
          <button type="button" className="btn danger" onClick={resetSettings}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
