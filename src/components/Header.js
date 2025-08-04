import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header({ language, setLanguage, viewMode, setViewMode, t }) {
  const location = useLocation();
  const navigate = useNavigate();
  const languages = [
    { code: 'ko', label: '한국어' },
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'ja', label: '日本語' }
  ];

  const toggleViewMode = () => {
    const newMode = viewMode === 'detailed' ? 'summary' : 'detailed';
    setViewMode(newMode);
    if (newMode === 'detailed') {
      navigate('/');
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          {viewMode === 'detailed' ? (
            <Link to="/" className="logo-link">
              <div className="logo">
                <h1>{t.name}</h1>
                <span className="title">{t.title}</span>
              </div>
            </Link>
          ) : (
            <div className="logo">
              <h1>{t.name}</h1>
              <span className="title">{t.title}</span>
            </div>
          )}
          <button className="view-mode-toggle" onClick={toggleViewMode}>
            <span className="toggle-icon"></span>
            <span className="toggle-text">
              {viewMode === 'detailed' ? t.summaryView : t.detailedView}
            </span>
          </button>
        </div>
        
        {viewMode === 'detailed' && (
          <nav className="header-nav">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              {t.about}
            </Link>
            <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}>
              {t.experience}
            </Link>
            <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
              {t.skills}
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              {t.contact}
            </Link>
          </nav>
        )}
        <div className="language-selector">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`lang-btn ${language === lang.code ? 'active' : ''}`}
              onClick={() => setLanguage(lang.code)}
              title={lang.label}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header; 