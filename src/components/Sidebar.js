import React from 'react';

function Sidebar({ activeSection, setActiveSection, activeExperience, setActiveExperience, language, t }) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1999;

  const menuItems = [
    { id: 'about', label: t.about },
    { id: 'experience', label: t.experience },
    { id: 'skills', label: t.skills },
    { id: 'security', label: t.security },
    { id: 'contact', label: t.contact }
  ];

  const experienceItems = [
    { id: 'innotium', label: `${t.innotium} (2022.05 ~ 2025.06)` }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <img 
            src="/image/main_Pic1.jpg" 
            alt={t.name}
            className="profile-image"
          />
          <h3>{t.name}</h3>
          <p>{t.title}</p>
          <p className="age">{age}{t.age}</p>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <div key={item.id}>
              <button
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className={`nav-icon ${item.id}-icon`}></span>
                <span className="nav-label">{item.label}</span>
                {activeSection === item.id && <span className="active-indicator">●</span>}
              </button>

              {item.id === 'experience' && activeSection === 'experience' && (
                <div className="sub-nav">
                  {experienceItems.map(subItem => (
                    <button
                      key={subItem.id}
                      className={`sub-nav-item ${activeExperience === subItem.id ? 'active' : ''}`}
                      onClick={() => setActiveExperience(subItem.id)}
                    >
                      <span className={`nav-icon ${subItem.id}-icon`}></span>
                      <span className="nav-label">{subItem.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="current-position">
          <div className="position-indicator">
            <span className="position-text">{t.currentPosition}</span>
            <span className="position-dot">●</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;