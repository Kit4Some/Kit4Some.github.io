import React from 'react';

function Footer({ language, t }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; 2024 {t.name}. {t.allRightsReserved}</p>
          <p>{t.madeWithReact}</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Kit4Some" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:unionday@naver.com" className="footer-link">{language === 'ko' ? '이메일' : 'Email'}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 