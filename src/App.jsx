import { useEffect, useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div>
      {/* Top bar (full width) */}
      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <span className="logoMark">TM</span>
            <span className="logoText">Thomas Mermingis</span>
          </div>

          <div className="topbarRight">
            <a
              href="https://github.com/Thomas-Mer"
              target="_blank"
              rel="noreferrer"
              className="navLink"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-m-/"
              target="_blank"
              rel="noreferrer"
              className="navLink"
            >
              LinkedIn
            </a>

            <button
              className="mode-toggle"
              onClick={() => setDarkMode((v) => !v)}
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero (full width, not boxed) */}
      <section className="hero">
        <div className="container heroInner">
          <p className="eyebrow">Frontend Web Developer • React • JavaScript</p>

          <h1 className="heroTitle">
            I build clean, responsive web apps that are easy to use and easy to
            maintain.
          </h1>

          <p className="heroLead">
            Junior frontend developer focused on practical projects, clear UI,
            and solid fundamentals. Open to remote/hybrid roles in the UK.
          </p>

          <div className="heroActions">
            <a className="button" href="#projects">
              View Projects
            </a>
            <a className="button ghost" href="#contact">
              Contact
            </a>
          </div>

          <div className="badges">
            <span className="badge">React</span>
            <span className="badge">Vite</span>
            <span className="badge">HTML/CSS</span>
            <span className="badge">JavaScript</span>
            <span className="badge">Git/GitHub</span>
            <span className="badge">Netlify</span>
          </div>
        </div>
      </section>

      {/* About (full width, wide, not boxed) */}
      <section className="sectionWide" id="about">
        <div className="container">
          <h2>About</h2>
          <p className="aboutLead">
            Frontend developer building clean, responsive web applications using
            HTML, CSS, JavaScript, and React. I care about clarity, usability,
            and shipping practical work.
          </p>
        </div>
      </section>

      {/* Rest of page (centered, wide container, not boxed) */}
      <main className="main">
        <div className="container">
          <Projects />
        </div>

        <section className="sectionWide" id="contact">
          <div className="container">
            <h2>Contact</h2>
            <p>
              Best place to reach me:{" "}
              <a
                href="https://www.linkedin.com/in/thomas-m-/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </main>

      <section className="sectionWide" id="contact">
  <div className="container">
    <h2>Contact</h2>
    <p className="contactLead">
      Want to talk about a junior frontend role or a project? Send me a message.
    </p>

    <form
      className="contactForm"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        const subject = encodeURIComponent(`Portfolio contact from ${name || "someone"}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

        window.location.href = `mailto:YOUR_EMAIL_HERE?subject=${subject}&body=${body}`;
      }}
    >
      <div className="formRow">
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" />
        </label>

        <label>
          Email
          <input name="email" type="email" placeholder="you@email.com" required />
        </label>
      </div>

      <label>
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="What would you like to discuss?"
          required
        />
      </label>

      <button className="button" type="submit">
        Send Message
      </button>

      <p className="mutedNote">
        This opens your email client (no backend needed).
      </p>
    </form>
  </div>
</section>


      <footer className="footerWide">
        <div className="container">
          © {new Date().getFullYear()} Thomas Mermingis
        </div>
      </footer>
    </div>
  );
}

export default App;
