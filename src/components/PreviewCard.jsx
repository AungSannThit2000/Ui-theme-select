import { useSettings } from "../context/SettingsContext.jsx";

const TEXT = {
  en: { msg: "This is your preference preview." },
  th: { msg: "นี่คือหน้าตัวอย่างการตั้งค่า" },
};

export default function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <section className="card">
      <h2>Preview</h2>

      <div className="kv">
        <div className="k">Current Theme</div>
        <div className="v">{theme}</div>
      </div>

      <div className="kv">
        <div className="k">Current Language</div>
        <div className="v">{language}</div>
      </div>

      <p className="previewMsg">{TEXT[language].msg}</p>
    </section>
  );
}
