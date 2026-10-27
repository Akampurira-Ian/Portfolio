import portrait from "./assets/ian-portrait.png";

const projects = [
  {
    number: "01",
    name: "uniPulse",
    type: "Campus platform · Team contribution",
    description:
      "A campus platform taking shape around university information, communities, events, and academic planning. I contributed to its backend foundations, including the data model, database migrations, and migration testing.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Alembic"],
    href: "https://github.com/abarintuma/uniPulse",
    linkLabel: "View uniPulse on GitHub",
    className: "project-card--pulse",
  },
  {
    number: "02",
    name: "Student Attendance System",
    type: "Education · Team contribution",
    description:
      "A role-based attendance system for in-person lectures. I worked across responsive student and coordinator experiences, connected frontend flows to the API, and contributed session handling and analytics exports.",
    technologies: ["React", "FastAPI", "QR check-in", "Geolocation"],
    href: "https://github.com/abarintuma/student-attendance-system",
    linkLabel: "View the attendance system on GitHub",
    className: "project-card--attendance",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      {diagonal ? (
        <path
          d="M5.5 14.5 14 6m-7.5 0H14v7.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      ) : (
        <path
          d="M3.5 10h12m-4.5-4.5 4.5 4.5-4.5 4.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      )}
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className}`}>
      <div className="project-card__topline">
        <span className="project-card__number">{project.number}</span>
        <span className="project-card__type">{project.type}</span>
      </div>

      <div className="project-card__content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul aria-label={`${project.name} technologies`} className="tag-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      <a
        aria-label={project.linkLabel}
        className="project-card__link"
        href={project.href}
        rel="noreferrer"
        target="_blank"
      >
        <span>Explore the project</span>
        <ArrowIcon diagonal />
      </a>
    </article>
  );
}

function App() {
  return (
    <div className="site-shell" id="home">
      <header className="site-header page-wrap">
        <a aria-label="Ian Akampurira, home" className="wordmark" href="#home">
          <span aria-hidden="true" className="wordmark__mark">
            IA
          </span>
          <span>Ian Akampurira</span>
        </a>

        <nav aria-label="Main navigation" className="site-nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="site-nav__contact" href="#contact">
            Get in touch <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero page-wrap">
          <div className="hero__copy">
            <p className="eyebrow">
              <span aria-hidden="true" className="eyebrow__dot" />
              Software engineer <span aria-hidden="true">/</span> Full-stack
              developer
            </p>
            <h1 id="hero-title">
              Thoughtful software,
              <br />
              <em>built with care.</em>
            </h1>
            <p className="hero__intro">
              I’m Ian, a software engineer who enjoys building useful,
              dependable products—from the data model to the details people see.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                See selected work <ArrowIcon />
              </a>
              <a
                className="button button--quiet"
                href="https://github.com/Akampurira-Ian"
                rel="noreferrer"
                target="_blank"
              >
                GitHub <ArrowIcon diagonal />
              </a>
            </div>
          </div>

          <div aria-hidden="true" className="hero__note">
            <span className="hero__note-rule" />
            <p>
              Good work starts
              <br />
              with paying attention.
            </p>
          </div>
          <a
            aria-label="Scroll to selected work"
            className="scroll-cue"
            href="#work"
          >
            <span />
          </a>
        </section>

        <section
          aria-labelledby="work-title"
          className="work-section page-wrap section-rule"
          id="work"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-heading__eyebrow">
                A few things I’ve helped build
              </p>
              <h2 id="work-title">
                Selected <em>work</em>
              </h2>
            </div>
            <p className="section-heading__aside">
              Real projects, built with other people.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="about-section page-wrap section-rule"
          id="about"
        >
          <div className="about-section__heading">
            <p className="eyebrow">A little about me</p>
            <h2 id="about-title">
              Engineering with
              <br />
              <em>the whole picture in mind.</em>
            </h2>
            <figure className="about-portrait">
              <img
                alt="Portrait of Ian Akampurira."
                className="about-portrait__image"
                src={portrait}
              />
            </figure>
          </div>
          <div className="about-section__body">
            <p>
              I like working across the stack and understanding how the pieces
              fit together. On the projects here, that has meant helping shape
              backend foundations as well as building practical, responsive
              interfaces.
            </p>
            <p>
              I care about clear systems, useful details, and making software
              feel straightforward for the people who rely on it.
            </p>
            <div className="skills">
              <p className="skills__label">Tools I’ve worked with</p>
              <ul className="tag-list">
                {["React", "Python", "FastAPI", "PostgreSQL", "Alembic"].map(
                  (technology) => (
                    <li key={technology}>{technology}</li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="contact-section page-wrap"
          id="contact"
        >
          <p className="eyebrow">Have a good one in mind?</p>
          <div className="contact-section__content">
            <h2 id="contact-title">
              Let’s make
              <br />
              something <em>useful.</em>
            </h2>
            <a
              className="button button--light"
              href="https://github.com/Akampurira-Ian"
              rel="noreferrer"
              target="_blank"
            >
              Find me on GitHub <ArrowIcon diagonal />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap">
        <a className="wordmark wordmark--footer" href="#home">
          <span aria-hidden="true" className="wordmark__mark">
            IA
          </span>
          <span>Ian Akampurira</span>
        </a>
        <p>Made with care, from top to bottom.</p>
        <a className="back-to-top" href="#home">
          Back to top <ArrowIcon diagonal />
        </a>
      </footer>
    </div>
  );
}

export default App;
