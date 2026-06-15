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

export default function App() {
  const { features } = portfolioData;
  const gamification = useGamification();

  const gamificationEnabled = features.enableGamification;

  return (
    <>
      {/* Background */}
      {features.enableCyberGrid && <CyberGrid />}

      {/* Gamification Overlays */}
      {gamificationEnabled && (
        <>
          <XPBar progress={gamification.scrollProgress} />
          <GameStats
            level={gamification.level}
            xpInCurrentLevel={gamification.xpInCurrentLevel}
            xpPerLevel={gamification.xpPerLevel}
            achievementCount={gamification.achievementCount}
            totalAchievements={gamification.totalAchievements}
          />
          <AchievementToast achievement={gamification.currentToast} />
          <Terminal onOpen={() => gamification.unlockAchievement('hacker')} />
        </>
      )}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About onVisible={() => gamificationEnabled && gamification.checkSectionAchievement('about')} />
        <Skills onVisible={() => gamificationEnabled && gamification.checkSectionAchievement('skills')} />
        <FrontendSkills />
        <Certifications />
        <Education />
        <Training />
        <Projects onVisible={() => gamificationEnabled && gamification.checkSectionAchievement('projects')} />
        <Responsibilities />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
