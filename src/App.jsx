import { useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <header className="header">
        <div>
          <h1 className="title">Thomas Mermingis</h1>
          <p className="subtitle">Frontend Web Developer</p>
        </div>

        <div className="headerActions">
          <a
            className="link"
            href="https://github.com/Thomas-Mer"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/thomas-m-/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <button className="button" onClick={() => setDark((v) => !v)}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main className="main">
        <section className="section">
          <h2>About</h2>
          <p>
            Frontend developer building clean, responsive web applications with
            HTML, CSS, JavaScript, and React. Open to junior roles and freelance
            projects.
          </p>
        </section>

        <Projects />

        <section className="section">
          <h2>Contact</h2>
          <p>
            Email: <span className="mono">thomasmermigis@gmail.com</span>
          </p>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Thomas Mermingis
      </footer>
    </div>
  );
}

export default App;
