import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import translations from './translations';

function App() {
  const [language, setLanguage] = useState('ko');
  const [viewMode, setViewMode] = useState('detailed'); // 'detailed' or 'summary'
  const [activeSection, setActiveSection] = useState('about');
  const [activeExperience, setActiveExperience] = useState('innotium');
  const dashboardRef = useRef(null);
  const sectionsRef = useRef({});
  
  const t = translations[language];
  const sections = ['about', 'experience', 'skills', 'security', 'contact'];

  // 섹션이 변경될 때 해당 위치로 스크롤 (요약 모드용)
  const scrollToSection = (sectionId) => {
    const sectionElement = sectionsRef.current[sectionId];
    if (sectionElement) {
      const headerHeight = 80;
      const sectionTop = sectionElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  // 스크롤 위치에 따라 현재 섹션 감지 (요약 모드용)
  useEffect(() => {
    if (viewMode !== 'summary') return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const headerHeight = 80;
      
      let currentSection = sections[0];
      
      for (let i = 0; i < sections.length; i++) {
        const sectionElement = sectionsRef.current[sections[i]];
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - headerHeight;
          const sectionHeight = sectionElement.offsetHeight;
          
          if (scrollTop >= sectionTop - 200 && 
              scrollTop < sectionTop + sectionHeight - 200) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, sections, viewMode]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <Router>
      <div className="app">
        <Header 
          language={language}
          setLanguage={setLanguage}
          viewMode={viewMode}
          setViewMode={setViewMode}
          t={t}
        />
        
        {viewMode === 'detailed' ? (
          <>
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home language={language} t={t} />} />
                <Route path="/about" element={<About language={language} t={t} />} />
                <Route path="/experience" element={<Experience language={language} t={t} />} />
                <Route path="/skills" element={<Skills language={language} t={t} />} />
                <Route path="/contact" element={<Contact language={language} t={t} />} />
              </Routes>
            </main>
          </>
        ) : (
          <div className="app-body">
            <Sidebar 
              activeSection={activeSection} 
              setActiveSection={handleSectionChange}
              activeExperience={activeExperience}
              setActiveExperience={setActiveExperience}
              language={language}
              t={t}
            />
            <main className="main-content summary-mode">
              <Dashboard 
                activeSection={activeSection} 
                activeExperience={activeExperience}
                dashboardRef={dashboardRef}
                sectionsRef={sectionsRef}
                language={language}
                t={t}
              />
            </main>
          </div>
        )}
        
        <Footer 
          language={language}
          t={t}
        />
      </div>
    </Router>
  );
}

export default App; 