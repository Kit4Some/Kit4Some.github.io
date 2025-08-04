import React from 'react';

function Dashboard({ activeSection, activeExperience, dashboardRef, sectionsRef, language, t }) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1999;

  const renderExperienceContent = () => {
    switch (activeExperience) {
      case 'innotium':
        return (
          <div className="experience-card">
            <div className="company-info">
              <h3>{t.innotium} (2022.05 ~ 2025.06)</h3>
              <span className="position">{t.position}</span>
              <span className="duration">{t.duration}</span>
            </div>
            <div className="role-description">
              <h4 className="role-title security-role">{t.ransomwareDefense}</h4>
              <p><strong>{t.ransomwareMainDev}</strong></p>
              <p className="highlight-text">{t.ccCertification}</p>
              <p><strong>{t.techStack}:</strong> C, C++, AWS EC2, AWS S3, AWS RDS</p>
              <ul>
                <li><strong>{t.performanceOpt}:</strong> {t.pidOptimization}</li>
                <li><strong>{t.kernelCompat}:</strong> {t.kernelDescription}</li>
                <li><strong>{t.commLogic}:</strong> {t.commDescription}</li>
                <li><strong>{t.securityEnhance}:</strong> {t.mssqlDefense}</li>
                <li><strong>{t.integrityVerify}:</strong> {t.integrityDescription}</li>
                <li><strong>{t.digitalSignature}:</strong> {t.signatureDescription}</li>
                <li><strong>{t.responseCenter}:</strong> {t.responseActivities1}
                  <ul>
                    <li>{t.responseActivities2}</li>
                    <li>{t.responseActivities3}</li>
                    <li>{t.responseActivities4}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="role-description">
              <h4 className="role-title linux-role">{t.linuxWatermark}</h4>
              <p><strong>{t.mainSoloDev}</strong></p>
              <p><strong>{t.techStack}:</strong> C++, X11</p>
              <ul>
                <li><strong>{t.watermarkSolution}:</strong> {t.watermarkDescription1}</li>
                <li><strong>{t.frontWatermark}:</strong> {t.watermarkDescription2}</li>
                <li><strong>{t.policyApply}:</strong> {t.watermarkDescription3}</li>
                <li><strong>{t.workspaceSupport}:</strong> {t.watermarkDescription4}</li>
              </ul>
            </div>

            <div className="role-description">
              <h4 className="role-title macos-role">{t.macosWatermark}</h4>
              <p><strong>{t.mainSoloDev}</strong></p>
              <p><strong>{t.techStack}:</strong> Swift, AppKit</p>
              <ul>
                <li><strong>{t.nativeDev}:</strong> {t.macDescription1}</li>
                <li><strong>{t.frontWatermark}:</strong> {t.macDescription2}</li>
                <li><strong>{t.jsonPolicy}:</strong> {t.macDescription3}</li>
                <li><strong>{t.fullSupport}:</strong> {t.macDescription4}</li>
                <li><strong>{t.systemInfo}:</strong> {t.macDescription5}</li>
              </ul>
            </div>

            <div className="role-description">
              <h4 className="role-title server-role">{t.serverManagement}</h4>
              <p><strong>{t.idcMainAdmin}</strong></p>
              <ul>
                <li><strong>{t.loadBalancing}:</strong> {t.serverDescription1}</li>
                <li><strong>{t.diskManagement}:</strong> {t.serverDescription2}</li>
                <li><strong>{t.cacheSystem}:</strong> {t.serverDescription3}</li>
                <li><strong>{t.networkMonitoring}:</strong> {t.serverDescription4}</li>
                <li><strong>{t.dataProtection}:</strong> {t.serverDescription5}</li>
              </ul>
              <p><strong>{t.serverSetupManagement}</strong></p>
              <ul>
                <li><strong>{t.serverSetup}:</strong> {t.serverDescription6}</li>
                <li><strong>{t.vulnerabilityAnalysis}:</strong> {t.serverDescription7}</li>
                <li><strong>{t.maintenance}:</strong> {t.serverDescription8}</li>
              </ul>
            </div>
          </div>
        );
      default:
        return <div>{t.noExperienceData}</div>;
    }
  };

  return (
    <div className="dashboard" ref={dashboardRef}>
      <div className="dashboard-content">
        <div 
          className="section about-section" 
          ref={el => sectionsRef.current['about'] = el}
        >
          <h2 className="greeting-title">{t.greeting}</h2>
          <div className="profile-card">
            <img 
              src="/image/main_Pic1.jpg" 
              alt={t.name}
              className="profile-image"
            />
            <div className="profile-info">
              <h3>{t.name}</h3>
              <p>{age}{t.age} (1999{t.yearBorn})</p>
              <div className="profile-badges">
                <span className="badge">{t.title}</span>
                <span className="badge primary">{t.position}</span>
              </div>
            </div>
          </div>
          <div className="intro-content">
            <p className="intro-highlight">{t.introText1(t.name, age)}</p>
            <p>{t.introText2}</p>
            <div className="intro-details">
              <div className="detail-item">
                <span className="detail-icon location-icon"></span>
                <span>{t.locationValue}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon education-icon"></span>
                <span>{t.education || '컴퓨터공학 전공'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon career-icon"></span>
                <span>3+ {t.yearsExperience || '년 경력'}</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="section experience-section" 
          ref={el => sectionsRef.current['experience'] = el}
        >
          <h2 className="section-title-with-icon">{t.experienceTitle}</h2>
          
          <div className="experience-timeline-summary">
            {/* Best of Best */}
            <div className="experience-note bob-note">
              <img src="/image/BoB_Logo.png" alt="Best of Best" className="experience-logo-small" />
              <div className="experience-note-content">
                <h3>{t.bobTitle} - {t.bobTrack}</h3>
                <p className="experience-period">2025.07 ~ 2026.03 ({t.inProgress || '진행 중'})</p>
                <p>{t.bobDescription}</p>
              </div>
            </div>
            
            {/* Innotium - 회사 로고 추가 */}
            <div className="company-header-with-logo">
              <img src="/image/Innotium_Logo.png" alt="Innotium" className="company-logo-main" />
              <div className="company-header-info">
                <h3>{t.innotium}</h3>
                <div className="company-meta">
                  <span className="position">{t.position}</span>
                  <span className="duration">2022.05 ~ 2025.06 ({t.duration})</span>
                </div>
              </div>
            </div>
          </div>
          
          {renderExperienceContent()}
        </div>

        <div 
          className="section skills-section" 
          ref={el => sectionsRef.current['skills'] = el}
        >
          <h2 className="section-title-with-icon">{t.skills}</h2>
          <div className="skills-overview">
            <p className="skills-intro">{t.skillsIntro || '다양한 기술 스택을 바탕으로 안정적이고 효율적인 시스템을 구축합니다.'}</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>{t.programmingLanguages}</h3>
              <div className="skill-items-detail">
                <div className="skill-item-with-level">
                  <span className="skill-tag primary">C/C++</span>
                  <span className="skill-level-text">{t.expert || '전문가'}</span>
                </div>
                <div className="skill-item-with-level">
                  <span className="skill-tag">JavaScript/TypeScript</span>
                  <span className="skill-level-text">{t.intermediate || '중급'}</span>
                </div>
                <div className="skill-item-with-level">
                  <span className="skill-tag">Swift</span>
                  <span className="skill-level-text">{t.intermediate || '중급'}</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>{t.operatingSystems}</h3>
              <div className="skill-tags">
                <span className="skill-tag">Windows</span>
                <span className="skill-tag">Ubuntu/Linux</span>
                <span className="skill-tag">{language === 'ko' ? '개방형OS' : 'Open OS'}</span>
                <span className="skill-tag">macOS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>{t.cloudInfra}</h3>
              <div className="skill-tags">
                <span className="skill-tag">AWS EC2</span>
                <span className="skill-tag">AWS S3</span>
                <span className="skill-tag">AWS RDS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Linux Server</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>{t.devTools}</h3>
              <div className="skill-tags">
                <span className="skill-tag">X11</span>
                <span className="skill-tag">AppKit</span>
                <span className="skill-tag">MSSQL</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Visual Studio</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>{t.serverInfraManagement}</h3>
              <div className="skill-tags">
                <span className="skill-tag">{t.idcManagement}</span>
                <span className="skill-tag">{t.loadBalance}</span>
                <span className="skill-tag">{t.raidSystem}</span>
                <span className="skill-tag">{t.ssdCache || 'SSD 캐시'}</span>
                <span className="skill-tag">{t.networkTraffic}</span>
                <span className="skill-tag">{t.diskPool || '디스크 풀'}</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="section security-section" 
          ref={el => sectionsRef.current['security'] = el}
        >
          <h2 className="section-title-with-icon">{t.securityTitle}</h2>
          <div className="security-card">
            <h3>{t.ransomwareResponse}</h3>
            <div className="security-details">
              <div className="security-item">
                <h4>{t.penetrationAnalysis}</h4>
                <p>{t.penetrationAnalysisDesc}</p>
              </div>
              <div className="security-item">
                <h4>{t.behaviorDetection}</h4>
                <p>{t.behaviorDetectionDesc}</p>
              </div>
              <div className="security-item">
                <h4>{t.reportGeneration}</h4>
                <p>{t.reportGenerationDesc}</p>
              </div>
              <div className="security-item">
                <h4>{t.recoveryPlan}</h4>
                <p>{t.recoveryPlanDesc}</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="section contact-section" 
          ref={el => sectionsRef.current['contact'] = el}
        >
          <h2 className="section-title-with-icon">{t.contactTitle}</h2>
          <div className="contact-card">
            <p>{t.contactDescription}</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon email-icon"></span>
                <div className="contact-details">
                  <a href="mailto:unionday@naver.com">unionday@naver.com</a>
                  <span className="contact-label">{t.emailPreferred || '선호 연락 수단'}</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon github-icon"></span>
                <div className="contact-details">
                  <a href="https://github.com/Kit4Some" target="_blank" rel="noopener noreferrer">@Kit4Some</a>
                  <span className="contact-label">{t.viewProjects || '프로젝트 보기'}</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon linkedin-icon"></span>
                <div className="contact-details">
                  <a href="https://linkedin.com/in/haksung-lee" target="_blank" rel="noopener noreferrer">Haksung Lee</a>
                  <span className="contact-label">{t.professionalNetwork || '프로페셔널 네트워크'}</span>
                </div>
              </div>
            </div>
            <div className="contact-cta">
              <p className="cta-text">{t.contactCTA || '새로운 기회와 도전을 환영합니다!'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;