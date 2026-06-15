import { portfolioData } from './data/portfolioData';
import { useGamification } from './hooks/useGamification';

// Layout & Background
import CyberGrid from './components/ui/CyberGrid';
import Navbar from './components/Navbar';

// Sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FrontendSkills from './components/FrontendSkills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Training from './components/Training';
import Projects from './components/Projects';
import Responsibilities from './components/Responsibilities';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Gamification
import XPBar from './components/XPBar';
import GameStats from './components/GameStats';
import AchievementToast from './components/AchievementToast';
import Terminal from './components/Terminal';

import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';

export default function App() {
  const { features } = portfolioData;

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      
      {/* Background */}
      {features.enableCyberGrid && <CyberGrid />}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <FrontendSkills />
        <Certifications />
        <Education />
        <Training />
        <Projects />
        <Responsibilities />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
