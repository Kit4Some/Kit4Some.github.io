import React from 'react';

function Contact({ language, t }) {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.contact}</h1>
        
        <div className="contact-detail-card">
          <div className="contact-intro">
            <h2>{t.contactIntro}</h2>
            <p>{t.contactDescription}</p>
          </div>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon-large email-icon-large"></div>
              <h3>{t.email}</h3>
              <a href="mailto:unionday@naver.com" className="contact-link-large">
                unionday@naver.com
              </a>
              <p>{t.emailDescription}</p>
            </div>

            <div className="contact-method">
              <div className="contact-icon-large github-icon-large"></div>
              <h3>GitHub</h3>
              <a href="https://github.com/Kit4Some" target="_blank" rel="noopener noreferrer" className="contact-link-large">
                @Kit4Some
              </a>
              <p>{t.githubDescription}</p>
            </div>

            <div className="contact-method">
              <div className="contact-icon-large linkedin-icon-large"></div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/haksung-lee-bba21133b/" target="_blank" rel="noopener noreferrer" className="contact-link-large">
                Haksung Lee
              </a>
              <p>{t.linkedinDescription}</p>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>{t.sendMessage}</h3>
            <form className="contact-form">
              <div className="form-group">
                <label>{t.yourName}</label>
                <input type="text" placeholder={t.namePlaceholder} />
              </div>
              <div className="form-group">
                <label>{t.yourEmail}</label>
                <input type="email" placeholder={t.emailPlaceholder} />
              </div>
              <div className="form-group">
                <label>{t.subject}</label>
                <input type="text" placeholder={t.subjectPlaceholder} />
              </div>
              <div className="form-group">
                <label>{t.message}</label>
                <textarea rows="5" placeholder={t.messagePlaceholder}></textarea>
              </div>
              <button type="submit" className="submit-button">
                {t.sendButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;