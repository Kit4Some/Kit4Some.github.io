import React from 'react';

function Experience({ language, t }) {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.experience}</h1>
        
        <div className="experience-timeline">
          {/* Best of Best */}
          <div className="timeline-item">
            <div className="timeline-date">2025.07 ~ 2026.03</div>
            <div className="timeline-content">
              <div className="company-header">
                <img src="/image/BoB_Logo.png" alt="Best of Best" className="company-logo" />
                <div>
                  <h3>{t.bobTitle}</h3>
                  <span className="position-badge">{t.bobTrack}</span>
                </div>
              </div>
              <div className="experience-description">
                <p>{t.bobDescription}</p>
                <ul>
                  <li>{t.bobDetail1}</li>
                  <li>{t.bobDetail2}</li>
                  <li>{t.bobDetail3}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Innotium */}
          <div className="timeline-item">
            <div className="timeline-date">2022.05 ~ 2025.06</div>
            <div className="timeline-content">
              <div className="company-header">
                <img src="/image/Innotium_Logo.png" alt="Innotium" className="company-logo" />
                <div>
                  <h3>{t.innotium}</h3>
                  <span className="position-badge">{t.position}</span>
                  <span className="duration-badge">{t.duration}</span>
                </div>
              </div>
              
              <div className="experience-description">
                <h4>{t.ransomwareDefense}</h4>
                <p><strong>{t.ransomwareMainDev}</strong></p>
                <p className="highlight-text">{t.ccCertification}</p>
                <p><strong>{t.techStack}</strong> C, C++, AWS EC2, AWS S3, AWS RDS</p>
                <ul>
                  <li><strong>{t.performanceOpt}</strong> {t.pidOptimization}</li>
                  <li><strong>{t.kernelCompat}</strong> {t.kernelDescription}</li>
                  <li><strong>{t.commLogic}</strong> {t.commDescription}</li>
                  <li><strong>{t.securityEnhance}</strong> {t.mssqlDefense}</li>
                  <li><strong>{t.integrityVerify}</strong> {t.integrityDescription}</li>
                  <li><strong>{t.digitalSignature}</strong> {t.signatureDescription}</li>
                  <li><strong>{t.responseCenter}</strong> {t.responseActivities1}
                    <ul>
                      <li>{t.responseActivities2}</li>
                      <li>{t.responseActivities3}</li>
                      <li>{t.responseActivities4}</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="experience-description">
                <h4>{t.linuxWatermark}</h4>
                <p><strong>{t.mainSoloDev}</strong></p>
                <p><strong>{t.techStack}</strong> C++, X11</p>
                <ul>
                  <li><strong>{t.watermarkSolution}</strong> {t.watermarkDescription1}</li>
                  <li><strong>{t.frontWatermark}</strong> {t.watermarkDescription2}</li>
                  <li><strong>{t.policyApply}</strong> {t.watermarkDescription3}</li>
                  <li><strong>{t.workspaceSupport}</strong> {t.watermarkDescription4}</li>
                </ul>
              </div>

              <div className="experience-description">
                <h4>{t.macosWatermark}</h4>
                <p><strong>{t.mainSoloDev}</strong></p>
                <p><strong>{t.techStack}</strong> Swift, AppKit</p>
                <ul>
                  <li><strong>{t.nativeDev}</strong> {t.macDescription1}</li>
                  <li><strong>{t.frontWatermark}</strong> {t.macDescription2}</li>
                  <li><strong>{t.jsonPolicy}</strong> {t.macDescription3}</li>
                  <li><strong>{t.fullSupport}</strong> {t.macDescription4}</li>
                  <li><strong>{t.systemInfo}</strong> {t.macDescription5}</li>
                </ul>
              </div>

              <div className="experience-description">
                <h4>{t.serverManagement}</h4>
                <p><strong>{t.idcMainAdmin}</strong></p>
                <ul>
                  <li><strong>{t.loadBalancing}</strong> {t.serverDescription1}</li>
                  <li><strong>{t.diskManagement}</strong> {t.serverDescription2}</li>
                  <li><strong>{t.cacheSystem}</strong> {t.serverDescription3}</li>
                  <li><strong>{t.networkMonitoring}</strong> {t.serverDescription4}</li>
                  <li><strong>{t.dataProtection}</strong> {t.serverDescription5}</li>
                </ul>
                <p><strong>{t.serverSetupManagement}</strong></p>
                <ul>
                  <li><strong>{t.serverSetup}</strong> {t.serverDescription6}</li>
                  <li><strong>{t.vulnerabilityAnalysis}</strong> {t.serverDescription7}</li>
                  <li><strong>{t.maintenance}</strong> {t.serverDescription8}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;