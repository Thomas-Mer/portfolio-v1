import { useEffect, useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div>
      <header>
        <h1>Thomas Mermingis</h1>
        <p>Frontend Web Developer</p>

        <div className="header-links">
          <a href="https://github.com/Thomas-Mer" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/thomas-m-/"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            LinkedIn
          </a>

          <button className="mode-toggle" onClick={() => setDarkMode(v => !v)}>
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </header>

      <main>
        <section>
          <h2>About</h2>
          <p>
            Frontend developer building clean, responsive web applications using
            HTML, CSS, JavaScript, and React.
          </p>
        </section>

        <Projects />
      </main>

      <footer>© {new Date().getFullYear()} Thomas Mermingis</footer>
    </div>
  );
}

export default App;
