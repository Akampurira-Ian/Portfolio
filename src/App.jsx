const technologies = [
  { name: 'React', mark: 'R', color: 'text-cyan-300', position: 'left-2 top-16' },
  { name: 'Python', mark: 'Py', color: 'text-yellow-200', position: 'right-0 top-8' },
  { name: 'Flutter', mark: 'F', color: 'text-sky-300', position: 'bottom-24 left-0' },
  { name: 'PostgreSQL', mark: '◉', color: 'text-indigo-300', position: 'bottom-10 right-2' },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      {diagonal ? (
        <path
          d="M7 17 17 7M7 7h10v10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      ) : (
        <path
          d="M4 12h15m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      )}
    </svg>
  )
}

function App() {
  return (
    <main
      className="relative isolate min-h-screen overflow-hidden bg-[#080a0f] text-white"
      id="home"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-20 h-[30rem] w-[30rem] rounded-full bg-violet-700/20 blur-[130px]" />
        <div className="absolute -right-40 top-48 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 pt-5 sm:px-8 lg:px-12">
        <a
          aria-label="Ian.dev home"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:border-white/20"
          href="#home"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-300 text-[11px] font-black text-[#11111a]">
            i
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Ian<span className="text-white/45">.dev</span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.055] p-1.5 shadow-lg shadow-black/10 backdrop-blur-xl sm:gap-2"
        >
          {[
            { label: 'Home', href: '#home' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              className={`rounded-full px-3 py-2 text-xs transition hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm ${
                link.label === 'Home'
                  ? 'bg-white/10 text-white'
                  : 'text-white/65'
              }`}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section
        aria-labelledby="hero-title"
        className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-10 px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:px-12 lg:pb-20 lg:pt-10"
      >
        <div className="relative z-10 max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-emerald-100/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            OPEN TO EXCITING OPPORTUNITIES
          </div>

          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-white/45 uppercase">
            Software Engineer <span className="text-violet-300">/</span> Full-Stack Developer
          </p>
          <h1
            className="text-[clamp(3.5rem,10vw,7.25rem)] leading-[0.91] font-semibold tracking-[-0.075em]"
            id="hero-title"
          >
            Akampurira
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/55 bg-clip-text text-transparent">
              Ian<span className="text-violet-300">.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            I design and build thoughtful digital experiences, turning complex
            ideas into fast, reliable products for the web and beyond.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-[#11121a] transition hover:-translate-y-0.5 hover:bg-violet-100"
              href="#projects"
            >
              View My Work
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-medium text-white/85 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.09]"
              href="#contact"
              id="contact"
            >
              Get in Touch
              <ArrowIcon diagonal />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 text-xs text-white/40">
            <span className="h-px w-8 bg-white/20" />
            Thoughtful by design <span className="text-white/20">·</span> Engineered to scale
          </div>
        </div>

        <div
          aria-label="Technologies: React, Python, Flutter, and PostgreSQL"
          className="relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center"
          id="projects"
          role="img"
        >
          <div className="absolute inset-[9%] rounded-full border border-white/[0.07]" />
          <div className="absolute inset-[20%] rounded-full border border-dashed border-white/[0.09]" />
          <div className="absolute inset-[31%] rounded-full border border-white/[0.06]" />
          <div className="absolute h-[72%] w-[72%] rounded-full bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-400/10 blur-2xl" />

          <div className="relative grid h-[44%] w-[44%] place-items-center rounded-full border border-white/15 bg-[#11131c]/75 shadow-[0_0_100px_rgba(139,92,246,0.18)] backdrop-blur-2xl">
            <div className="absolute inset-2 rounded-full border border-white/[0.06]" />
            <div className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-violet-500/20 via-[#171522] to-cyan-400/20 sm:h-36 sm:w-36">
              <span className="bg-gradient-to-br from-white via-violet-100 to-cyan-200 bg-clip-text text-6xl font-semibold tracking-[-0.09em] text-transparent sm:text-7xl">
                AI
              </span>
              <span className="absolute bottom-5 h-1 w-8 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 blur-[1px]" />
            </div>
          </div>

          {technologies.map((technology) => (
            <div
              className={`absolute ${technology.position} flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#12141d]/80 px-3.5 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:px-4`}
              key={technology.name}
            >
              <span
                className={`grid h-8 w-8 place-items-center rounded-xl bg-white/[0.07] text-sm font-bold ${technology.color}`}
              >
                {technology.mark}
              </span>
              <span className="text-xs font-medium text-white/80 sm:text-sm">
                {technology.name}
              </span>
            </div>
          ))}

          <div className="absolute left-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.9)]" />
          <div className="absolute right-[16%] top-[38%] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.9)]" />
          <div className="absolute bottom-[24%] left-[30%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </div>
      </section>
    </main>
  )
}

export default App
