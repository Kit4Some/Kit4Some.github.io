import React from 'react';

function Skills({ language, t }) {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.skills}</h1>
        
        <div className="skills-detail-grid">
          <div className="skill-detail-category">
            <h3>{t.programmingLanguages}</h3>
            <div className="skill-items">
              <div className="skill-item primary">
                <h4>C / C++</h4>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
                <p>{t.cppDescription}</p>
              </div>
              <div className="skill-item">
                <h4>JavaScript / TypeScript</h4>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '70%' }}></div>
                </div>
                <p>{t.jsDescription}</p>
              </div>
              <div className="skill-item">
                <h4>Swift</h4>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '60%' }}></div>
                </div>
                <p>{t.swiftDescription}</p>
              </div>
            </div>
          </div>

          <div className="skill-detail-category">
            <h3>{t.operatingSystems}</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>Windows</h4>
                <p>{t.windowsDescription}</p>
              </div>
              <div className="skill-item">
                <h4>Linux (Ubuntu)</h4>
                <p>{t.linuxDescription}</p>
              </div>
              <div className="skill-item">
                <h4>{language === 'ko' ? '개방형OS' : 'Open OS'}</h4>
                <p>{t.openOSDescription}</p>
              </div>
              <div className="skill-item">
                <h4>macOS</h4>
                <p>{t.macOSDescription}</p>
              </div>
            </div>
          </div>

          <div className="skill-detail-category">
            <h3>{t.cloudInfra}</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>AWS EC2</h4>
                <p>{t.ec2Description}</p>
              </div>
              <div className="skill-item">
                <h4>AWS S3</h4>
                <p>{t.s3Description}</p>
              </div>
              <div className="skill-item">
                <h4>AWS RDS</h4>
                <p>{t.rdsDescription}</p>
              </div>
            </div>
          </div>

          <div className="skill-detail-category">
            <h3>{t.devTools}</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>X11</h4>
                <p>{t.x11Description}</p>
              </div>
              <div className="skill-item">
                <h4>AppKit</h4>
                <p>{t.appKitDescription}</p>
              </div>
              <div className="skill-item">
                <h4>MSSQL</h4>
                <p>{t.mssqlDescription}</p>
              </div>
            </div>
          </div>

          <div className="skill-detail-category">
            <h3>{t.serverInfraManagement}</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>{t.idcManagement}</h4>
                <p>{t.idcDescription}</p>
              </div>
              <div className="skill-item">
                <h4>{t.loadBalance}</h4>
                <p>{t.loadBalanceDescription}</p>
              </div>
              <div className="skill-item">
                <h4>{t.raidSystem}</h4>
                <p>{t.raidDescription}</p>
              </div>
              <div className="skill-item">
                <h4>{t.networkTraffic}</h4>
                <p>{t.networkTrafficDescription}</p>
              </div>
            </div>
          </div>

          <div className="skill-detail-category">
            <h3>{t.security}</h3>
            <div className="skill-items">
              <div className="skill-item">
                <h4>{t.ransomwareResponse}</h4>
                <p>{t.ransomwareResponseDesc}</p>
              </div>
              <div className="skill-item">
                <h4>{t.vulnerabilityAnalysis}</h4>
                <p>{t.vulnerabilityAnalysisDesc}</p>
              </div>
              <div className="skill-item">
                <h4>{t.ccCertificationSkill}</h4>
                <p>{t.ccCertificationDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;