import { useState } from 'react'

const linkedInUrl = 'https://www.linkedin.com/in/christian-macomber-b94898330/'
const emailAddress = 'christian.macomber@digipen.edu'

const projects = [
  {
    number: '01',
    title: 'Horror Game',
    type: 'Unreal Engine 5',
    dates: 'SEP 2026 — JUN 2027',
    status: 'IN DEVELOPMENT',
    visual: 'visual-horror',
    tags: ['Unreal Engine 5', 'Behavior Trees', 'Enemy AI'],
    summary:
      'An interdisciplinary, team-based horror game being developed with programmers, designers, and artists.',
    contributions: [
      'Developed an enemy AI system using behavior trees to create complex and flexible enemy behaviors.',
      'Work with the team to test and improve gameplay features as development continues.',
    ],
  },
  {
    number: '02',
    title: 'Top-Down Adventure Game',
    type: 'C++ Custom Engine',
    dates: 'SEP 2025 — JUN 2026',
    status: 'COMING SOON TO STEAM',
    visual: 'visual-adventure',
    tags: ['C++', 'Custom Engine', 'Gameplay Systems'],
    summary:
      'A top-down adventure game built around a graveyard level and boss encounter.',
    contributions: [
      'Developed item, inventory, and collision systems.',
      'Designed enemy and boss AI using a behavior tree with customizable attacks, allowing enemy types to share a system while retaining unique behaviors.',
      'Ran playtests and adjusted enemy encounters based on game-flow and level-design feedback.',
    ],
  },
  {
    number: '03',
    title: 'Casino Game Simulator Engine',
    type: 'C++ Custom Engine',
    dates: 'JAN 2025 — JUN 2025',
    status: 'COMPLETED PROJECT',
    visual: 'visual-casino',
    tags: ['C++', 'Game Logic', 'Modular Systems'],
    summary:
      'A modular and extendable engine designed to support a variety of casino games.',
    contributions: [
      'Implemented core gameplay mechanics for card games, including poker rules and game logic.',
      'Implemented, tested, and debugged gameplay systems through iterative development.',
    ],
  },
  {
    number: '04',
    title: 'Custom Game Controller',
    type: 'ARM Assembly',
    dates: '',
    status: 'HARDWARE + SOFTWARE',
    visual: 'visual-controller',
    tags: ['ARM Assembly', 'Circuitry', 'Input Programming'],
    summary:
      'A functional custom game controller combining basic circuitry with low-level input programming.',
    contributions: [
      'Programmed controller input behavior in ARM Assembly.',
      'Tested hardware and software interaction.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Languages',
    skills: ['C++', 'C', 'C#', 'Python', 'Verse', 'ARM Assembly'],
  },
  {
    title: 'Engines & Gameplay',
    skills: ['Unreal Engine 5', 'Unity 6', 'Custom Game Engines', 'Gameplay Programming', 'Game Mechanics', 'Enemy Behavior'],
  },
  {
    title: 'Data Structures & Algorithms',
    skills: ['Hash Tables', 'Graphs', 'AVL Trees', 'Binary Trees', 'Big-O Analysis'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Perforce', 'Git / GitHub', 'SVN', 'JIRA', 'Visual Studio', 'Debugging', 'Testing', 'Performance Optimization', 'Iteration', 'Team Collaboration'],
  },
  {
    title: 'AI-Assisted Development Tools',
    skills: ['GPT-5.6 Sol', 'Claude Sonnet 5', 'Claude Fable 5', 'Kimi K3'],
  },
]

const experience = [
  {
    role: 'Computer Science Teaching Assistant',
    organization: 'DigiPen Institute of Technology',
    dates: 'SEP 2025 — PRESENT',
    points: [
      'Assist students with introductory C programming, program logic, debugging, and foundational computer science concepts.',
      'Help students diagnose programming errors and develop systematic problem-solving and debugging strategies.',
      'Explain programming and game development concepts through one-on-one technical support, and provide feedback on assignments.',
    ],
  },
  {
    role: 'Youth Game Development Instructor',
    organization: 'Open World · Redmond, WA',
    dates: 'JUL 2026 — AUG 2026',
    points: [
      'Taught students ages 8–13 robotics engineering and programming using robotics kits and MakeCode.',
      'Taught students ages 6–8 introductory game development using MakeCode Arcade.',
      'Guided students through testing, troubleshooting, and iteration while encouraging creativity, teamwork, and problem-solving.',
    ],
  },
]

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>
}

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>
}

function ProjectVisual({ type, number }) {
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      <span className="visual-index">{number} / PROJECT</span>
      {type === 'visual-horror' && (
        <>
          <div className="horror-ring ring-one" />
          <div className="horror-ring ring-two" />
          <div className="horror-core" />
          <div className="visual-crosshair" />
          <span className="visual-caption">BEHAVIOR / RESPONSE</span>
        </>
      )}
      {type === 'visual-adventure' && (
        <>
          <div className="map-grid" />
          <div className="map-path path-one" />
          <div className="map-path path-two" />
          <div className="map-node node-one" />
          <div className="map-node node-two" />
          <div className="map-node node-three" />
          <span className="visual-caption">WORLD / ENCOUNTER / AI</span>
        </>
      )}
      {type === 'visual-casino' && (
        <>
          <div className="playing-card card-back"><span>♠</span></div>
          <div className="playing-card card-front"><span>♥</span><small>A</small></div>
          <div className="casino-chip chip-one">BET</div>
          <div className="casino-chip chip-two" />
          <span className="visual-caption">RULES / STATE / LOGIC</span>
        </>
      )}
      {type === 'visual-controller' && (
        <>
          <div className="controller-body">
            <span className="controller-dpad" />
            <span className="controller-stick stick-one" />
            <span className="controller-stick stick-two" />
            <span className="controller-button button-one" />
            <span className="controller-button button-two" />
          </div>
          <span className="circuit circuit-one" />
          <span className="circuit circuit-two" />
          <span className="visual-caption">INPUT / ASSEMBLY</span>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual type={project.visual} number={project.number} />
      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.type}</span>
          {project.dates && <span>{project.dates}</span>}
        </div>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className="project-number">{project.number}</span>
        </div>
        <p className="project-summary">{project.summary}</p>
        <div className="tag-list">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <details className="contribution-details">
          <summary>My contributions <span>＋</span></summary>
          <ul>
            {project.contributions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </details>
        <p className="project-status">{project.status}</p>
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Christian Macomber home">
          <span className="brand-mark">CM</span>
          <span className="brand-name">Christian Macomber</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? 'Close −' : 'Menu ＋'}
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowIcon /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-main">
            <SectionLabel>GAME DEVELOPMENT / GAMEPLAY PROGRAMMING</SectionLabel>
            <h1>Christian<br /><span>Macomber.</span></h1>
            <p className="hero-intro">
              Computer Science in Game Design student at DigiPen Institute of Technology, focused on gameplay programming and game systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            </div>
            <div className="hero-footnote">
              <span className="availability-dot" />
              <span>BA in Computer Science in Game Design · Expected Spring 2028</span>
            </div>
          </div>
          <div className="hero-aside" aria-label="Gameplay programming focus">
            <div className="code-card">
              <div className="code-card-top">
                <span className="window-dots"><i /><i /><i /></span>
                <span>focus.txt</span>
                <span>01 — 04</span>
              </div>
              <div className="code-lines">
                <p><span className="code-number">01</span><span className="code-key">focus</span> = <span className="code-string">"gameplay systems"</span></p>
                <p><span className="code-number">02</span><span className="code-key">language</span> = <span className="code-string">"C / C++"</span></p>
                <p><span className="code-number">03</span><span className="code-key">interests</span> = [</p>
                <p className="code-indent"><span className="code-string">"AI & enemy behavior"</span>,</p>
                <p className="code-indent"><span className="code-string">"game mechanics"</span>,</p>
                <p className="code-indent"><span className="code-string">"game development"</span></p>
                <p>]</p>
              </div>
              <div className="code-card-bottom"><span>COMPUTER SCIENCE</span><span>GAME DESIGN</span></div>
            </div>
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <span className="side-note">BUILD · TEST · ITERATE</span>
          </div>
          <a className="scroll-hint" href="#projects"><span /> Scroll to selected work</a>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading">
            <div>
              <SectionLabel>SELECTED WORK / 01—04</SectionLabel>
              <h2>Projects built<br />from the <span>ground up.</span></h2>
            </div>
            <p className="section-intro">
              Projects spanning custom-engine gameplay systems, enemy AI, card-game mechanics, and low-level controller input.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <SectionLabel>TECHNICAL TOOLKIT</SectionLabel>
                <h2>Tools I work <span>with.</span></h2>
              </div>
              <p className="section-intro">Languages, engines, development tools, and core skills listed in my résumé.</p>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group, index) => (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="skill-group-main">
                    <h3>{group.title}</h3>
                    <div className="tag-list skill-tags">
                      {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading">
            <div>
              <SectionLabel>WORK & EDUCATION</SectionLabel>
              <h2>Learning by<br /><span>building.</span></h2>
            </div>
            <div className="education-card">
              <span className="education-label">EDUCATION</span>
              <h3>DigiPen Institute of Technology</h3>
              <p>Bachelor of Arts in Computer Science in Game Design</p>
              <span className="education-dates">FALL 2024 — SPRING 2028 · EXPECTED</span>
            </div>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={item.role}>
                <div className="experience-side">
                  <span className="experience-number">0{index + 1}</span>
                  <span className="experience-dates">{item.dates}</span>
                </div>
                <div className="experience-main">
                  <p className="experience-organization">{item.organization}</p>
                  <h3>{item.role}</h3>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-layout">
            <div>
              <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
              <h2>Curious about<br />how games <span>work.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I enjoy making games and thinking about the design decisions and systems behind them.
              </p>
              <p>
                My game development experience includes custom engines using C/C++, Unreal Engine, gameplay systems, and enemy AI. I also enjoy learning how different parts of game development fit together.
              </p>
              <p>
                Away from development, I enjoy rock climbing and playing games. I like trying new foods, and Japanese curry—especially katsu curry—is a favorite.
              </p>
              <div className="about-interests">
                <span>Game systems</span><span>Rock climbing</span><span>Video games</span><span>Katsu curry</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h2>Let's talk <span>games.</span></h2>
          <p>For questions about my work or opportunities to connect, reach out by email or LinkedIn.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${emailAddress}`}>Email Christian <ArrowIcon /></a>
            <a className="button button-secondary" href={linkedInUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowIcon /></a>
          </div>
          <div className="contact-email">{emailAddress}</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home"><span className="brand-mark">CM</span><span className="brand-name">Christian Macomber</span></a>
          <span>Computer Science in Game Design · DigiPen</span>
          <a href="#home" className="back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
