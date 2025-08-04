import React from 'react';
import { Link } from 'react-router-dom';

function Home({ language, t }) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1999;

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t.greeting}</h1>
          <h2 className="hero-name">{t.name}</h2>
          <p className="hero-subtitle">{t.title}</p>
          <p className="hero-description">
            {t.homeIntro}
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="hero-button primary">
              {t.learnMore}
            </Link>
            <Link to="/contact" className="hero-button secondary">
              {t.getInTouch}
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/image/main_Pic1.jpg" alt={t.name} className="hero-profile-image" />
        </div>
      </div>

      <div className="home-highlights">
        <div className="highlight-card">
          <div className="highlight-icon experience-icon"></div>
          <h3>{t.experienceHighlight}</h3>
          <p>{t.experienceHighlightDesc}</p>
          <Link to="/experience" className="highlight-link">
            {t.viewDetails} →
          </Link>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon skills-icon"></div>
          <h3>{t.skillsHighlight}</h3>
          <p>{t.skillsHighlightDesc}</p>
          <Link to="/skills" className="highlight-link">
            {t.viewDetails} →
          </Link>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon security-icon"></div>
          <h3>{t.securityHighlight}</h3>
          <p>{t.securityHighlightDesc}</p>
          <Link to="/experience" className="highlight-link">
            {t.viewDetails} →
          </Link>
        </div>
      </div>

      <div className="current-status">
        <h3>{t.currentStatus}</h3>
        <div className="status-items">
          <div className="status-item">
            <img src="/image/BoB_Logo.png" alt="Best of Best" className="status-logo" />
            <div>
              <h4>{t.bobTitle}</h4>
              <p>{t.bobStatus}</p>
            </div>
          </div>
          <div className="status-item">
            <img src="/image/Innotium_Logo.png" alt="Innotium" className="status-logo" />
            <div>
              <h4>{t.innotium}</h4>
              <p>{t.innotiumStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;