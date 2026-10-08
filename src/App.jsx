import { useState } from 'react'

const links = {
  linkedin: 'https://www.linkedin.com/in/christian-macomber-b94898330/',
  bubbly: 'https://games.digipen.edu/games/bubbly-wubbly',
  email: 'mailto:Christian.macomber@digipen.edu',
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {
  const [activeProject, setActiveProject] = useState('bubbly')

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Christian Macomber home">CM<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Contact <Arrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> GAME DEVELOPER / GAMEPLAY PROGRAMMER</p>
            <h1>Christian<br /><span>Macomber.</span></h1>
            <p className="hero-description">
              Gameplay programmer focused on building systems, AI, and player experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button button-quiet" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Portrait of Christian">
            <div className="portrait-frame">
              <img
                src="https://christiangamedev.carrd.co/assets/images/image01.jpg?v=386db087"
                alt="Portrait of Christian Macomber"
              />
            </div>
            <div className="art-label"><span>BASED IN</span><strong>GAME DEVELOPMENT</strong></div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
          </div>
          <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED PROJECTS / 01—02</p>
              <h2>Built to be <span>played.</span></h2>
            </div>
            <p className="section-intro">I like figuring out how games work under the hood and turning those ideas into systems players can interact with.</p>
          </div>

          <div className="project-tabs" role="tablist" aria-label="Select a project">
            <button className={activeProject === 'bubbly' ? 'project-tab active' : 'project-tab'} onClick={() => setActiveProject('bubbly')} role="tab" aria-selected={activeProject === 'bubbly'}>01 <span>Bubbly Wubbly</span></button>
            <button className={activeProject === 'casino' ? 'project-tab active' : 'project-tab'} onClick={() => setActiveProject('casino')} role="tab" aria-selected={activeProject === 'casino'}>02 <span>Casino Simulator</span></button>
          </div>

          {activeProject === 'bubbly' ? (
            <article className="project-detail" role="tabpanel">
              <div className="project-image bubbly-image">
                <img src="https://christiangamedev.carrd.co/assets/videos/video02_thumbnail.jpg?v=386db087" alt="Bubbly Wubbly game menu" />
                <span className="image-tag">CUSTOM C++ ENGINE</span>
              </div>
              <div className="project-copy">
                <p className="eyebrow">TOP-DOWN ADVENTURE / 8 MONTHS</p>
                <h3>Bubbly Wubbly</h3>
                <p className="project-summary">Explore a mysterious graveyard, battle unique enemies, collect items, and face a challenging boss encounter. Built by a four-programmer team using a custom engine.</p>
                <div className="tech-list"><span>C++20</span><span>OpenGL 3.3</span><span>FMOD Core</span><span>GitHub</span></div>
                <h4>My contributions</h4>
                <ul className="contribution-list">
                  <li><strong>Producer & design lead</strong><span>Coordinated the team and helped guide overall game design.</span></li>
                  <li><strong>Enemy AI</strong><span>Designed enemy behaviors and combat logic.</span></li>
                  <li><strong>Inventory & stats</strong><span>Built systems for player items and player/enemy stats.</span></li>
                  <li><strong>Level design</strong><span>Designed and built the playable level.</span></li>
                </ul>
                <a className="text-link" href={links.bubbly} target="_blank" rel="noreferrer">View game on DigiPen <Arrow /></a>
              </div>
            </article>
          ) : (
            <article className="project-detail" role="tabpanel">
              <div className="project-image casino-image">
                <img src="https://christiangamedev.carrd.co/assets/images/image03.jpg?v=386db087" alt="Casino Simulator three-card poker gameplay" />
                <span className="image-tag">C / GAMEPLAY SYSTEMS</span>
              </div>
              <div className="project-copy">
                <p className="eyebrow">CASINO GAME COLLECTION / 4 MONTHS</p>
                <h3>Casino Simulator</h3>
                <p className="project-summary">A collection of casino-style games including Blackjack, 3 Card Poker, and a slot machine. Developed as part of a five-programmer team.</p>
                <div className="tech-list"><span>C</span><span>DigiPen Graphics Library</span><span>FMOD Core</span><span>GitHub</span></div>
                <h4>My contributions</h4>
                <ul className="contribution-list">
                  <li><strong>3 Card Poker system</strong><span>Designed reusable, scalable card-game logic that can support other card games.</span></li>
                  <li><strong>Betting system</strong><span>Developed the betting system used by the casino games.</span></li>
                  <li><strong>Gameplay systems</strong><span>Implemented core gameplay logic needed to run 3 Card Poker.</span></li>
                </ul>
                <a className="text-link" href="https://games.digipen.edu/" target="_blank" rel="noreferrer">Explore DigiPen games <Arrow /></a>
              </div>
            </article>
          )}
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Curious by<br /> <span>design.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">Hello, I'm Christian! I'm a Computer Science and Game Design student at DigiPen Institute of Technology with a focus on gameplay programming and game systems.</p>
              <p>I enjoy figuring out how games work under the hood and turning those ideas into systems that players can interact with. I've worked on everything from custom-engine C/C++ projects to Unreal Engine and Unity games, with experience in gameplay systems, AI, and game design.</p>
              <p>When I'm not working on games, I like getting outside and spending time with friends. I go hiking occasionally and spend a lot of my free time bouldering. I'm also a big fan of playing games and appreciating the systems and design choices behind them.</p>
              <div className="interest-tags"><span>Gameplay programming</span><span>AI & systems</span><span>Bouldering</span><span>Hiking</span><span>Video games</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's make something<br /><span>playable.</span></h2>
          <p className="contact-description">Interested in working together or want to talk about game development? Get in touch.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={links.email}>Email me <Arrow /></a>
            <a className="button button-quiet" href={links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home">CM<span>.</span></a>
        <p>Designed & built by Christian Macomber</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
