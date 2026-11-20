import { useState } from 'react'
import { site, about, services, cases } from './content.js'

function Arrow() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="arrow">
      <path d="M24 40V9M10 22 24 8l14 14" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="wordmark">
        <span className="wordmark-tile" aria-hidden="true">137</span>
        Studio 137
      </a>
      <nav aria-label="Main">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <h1>
        {site.headlineStart}{' '}
        <span className="hero-tile" aria-hidden="true"><span>137</span></span>{' '}
        {site.headlineEnd}
      </h1>
      <p className="hero-intro">{site.intro}</p>
      <ul className="hero-chips" aria-label="Services">
        {services.map((s) => (
          <li key={s.id}>
            <a className={`chip bg-${s.color}`} href={`#${s.id}`}>{s.title}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="about-photo">
        <img src="./natalie.webp" alt={`Portrait of ${about.name}`} width="600" height="600" />
      </div>
      <div className="about-copy">
        <h2 id="about-title">Who am I</h2>
        {about.paragraphs.map((p) => <p key={p.slice(0, 20)} className="about-text">{p}</p>)}
        <ul className="strengths">
          {about.strengths.map((s) => (
            <li key={s.title}>
              <span className={`strength-swatch bg-${s.color}`} aria-hidden="true" />
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="about-outside">{about.outside}</p>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <h2 id="services-title">What I do</h2>
      <ul className="service-grid">
        {services.map((s) => (
          <li key={s.id} id={s.id} className={`service bg-${s.color}`}>
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <ul className="service-includes">
              {s.includes.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CaseItem({ item, open, onToggle, id }) {
  return (
    <li className={`case${open ? ' is-open' : ''}`}>
      <button className="case-toggle" aria-expanded={open} aria-controls={`${id}-panel`} onClick={onToggle}>
        <span className={`case-swatch bg-${item.color}`} aria-hidden="true" />
        <span className="case-client">{item.client}</span>
        <span className={`case-sector bg-${item.color}`}>{item.sector}</span>
        <span className="case-icon" aria-hidden="true" />
      </button>
      <div className="case-panel" id={`${id}-panel`} role="region" aria-label={item.client}>
        <div className="case-panel-inner">
          <dl>
            <div><dt>The challenge</dt><dd>{item.challenge}</dd></div>
            <div><dt>What I did</dt><dd>{item.approach}</dd></div>
            <div className="case-result"><dt>The result</dt><dd>{item.result}</dd></div>
          </dl>
        </div>
      </div>
    </li>
  )
}

function Work() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <h2 id="work-title">Selected work</h2>
      <ul className="case-list">
        {cases.map((c, i) => (
          <CaseItem
            key={c.client}
            id={`case-${i}`}
            item={c}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </ul>
    </section>
  )
}

function Contact() {
  const [message, setMessage] = useState('')

  const send = () => {
    const subject = encodeURIComponent('Hello Studio 137')
    const body = encodeURIComponent(message)
    window.location.href = `mailto:${site.email}?subject=${subject}${message ? `&body=${body}` : ''}`
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Have a project in mind?</h2>
      <div className="composer">
        <label htmlFor="message" className="visually-hidden">Tell me about your project</label>
        <textarea
          id="message"
          placeholder="Tell me about your project…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send" onClick={send} aria-label="Email Studio 137 with this message">
          <Arrow />
        </button>
      </div>
      <p className="contact-note">
        The arrow opens your email app with your message ready to send. Or write to{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Studio 137</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  )
}
