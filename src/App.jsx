import { useEffect, useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("darkMode") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("darkMode", darkMode);
    } catch (e) {
      // ignore failed localStorage writes (e.g., privacy mode)
    }
  }, [darkMode]);

  return (
    <div>
      <header className="site-header">
        <div className="site-title">
          <h1>Thomas Mermingis</h1>
          <p>Frontend Web Developer</p>
        </div>

        <div className="header-links">
          <a
            href="https://github.com/Thomas-Mer"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/thomas-m-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <button
            className="mode-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-pressed={darkMode}
            aria-label="Toggle color scheme"
            title="Toggle color scheme"
          >
            {darkMode ? "☀️ Light mode" : "🌙 Dark mode"}
          </button>
        </div>
      </header>

      <main>
        <section>
          <h2>About</h2>
          <p>
            Frontend developer building clean, responsive web applications using
            HTML, CSS, JavaScript, and React. Focused on clarity, usability, and
            practical problem solving.
          </p>
        </section>

        <Projects />
      </main>

      <footer>
        © {new Date().getFullYear()} Thomas Mermingis
      </footer>
    </div>
  );
}

export default App;
