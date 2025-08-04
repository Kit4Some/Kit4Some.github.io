import React from 'react';

function About({ language, t }) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1999;

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.about}</h1>
        
        <div className="about-detail-card">
          <div className="profile-section-large">
            <img 
              src="/image/main_Pic1.jpg" 
              alt={t.name} 
              className="profile-image-large"
            />
            <div className="profile-info-large">
              <h2>{t.name}</h2>
              <p className="subtitle">{t.title}</p>
              <p className="age-info">{age}{t.age} (1999{t.yearBorn})</p>
            </div>
          </div>

          <div className="about-content">
            <section className="about-section">
              <h3>{t.aboutMe}</h3>
              <p>{t.introText1(t.name, age)}</p>
              <p>{t.introText2}</p>
              <p>{t.aboutDetail1}</p>
              <p>{t.aboutDetail2}</p>
            </section>

            <section className="about-section">
              <h3>{t.personalInfo}</h3>
              <div className="info-grid">
                <div className="info-item">
                  <strong>{t.birthDate}:</strong> 1999.08.09
                </div>
                <div className="info-item">
                  <strong>{t.location}:</strong> {t.locationValue}
                </div>
                <div className="info-item">
                  <strong>{t.email}:</strong> unionday@naver.com
                </div>
                <div className="info-item">
                  <strong>GitHub:</strong> @Kit4Some
                </div>
              </div>
            </section>

            <section className="about-section">
              <h3>{t.values}</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon problem-solve-icon"></div>
                  <h4>{t.value1Title}</h4>
                  <p>{t.value1Desc}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon learning-icon"></div>
                  <h4>{t.value2Title}</h4>
                  <p>{t.value2Desc}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon collaboration-icon"></div>
                  <h4>{t.value3Title}</h4>
                  <p>{t.value3Desc}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;