import { useState, useEffect, useCallback, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const ACHIEVEMENTS_STORAGE_KEY = 'portfolio_achievements';
const XP_STORAGE_KEY = 'portfolio_xp';

/**
 * Custom hook for gamification features: XP, levels, achievements.
 */
export function useGamification() {
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem(XP_STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 0;
  });

  const [unlockedAchievements, setUnlockedAchievements] = useState(() => {
    const saved = localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [currentToast, setCurrentToast] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const toastTimeoutRef = useRef(null);

  const xpPerLevel = 100;
  const level = Math.floor(xp / xpPerLevel) + 1;
  const xpInCurrentLevel = xp % xpPerLevel;

  // Persist XP
  useEffect(() => {
    localStorage.setItem(XP_STORAGE_KEY, xp.toString());
  }, [xp]);

  // Persist achievements
  useEffect(() => {
    localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(unlockedAchievements));
  }, [unlockedAchievements]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add XP
  const addXP = useCallback((amount) => {
    setXp((prev) => prev + amount);
  }, []);

  // Unlock achievement
  const unlockAchievement = useCallback((achievementId) => {
    if (unlockedAchievements.includes(achievementId)) return;

    const achievement = portfolioData.achievements?.find((a) => a.id === achievementId);
    if (!achievement) return;

    setUnlockedAchievements((prev) => [...prev, achievementId]);
    addXP(25);

    // Show toast
    setCurrentToast(achievement);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setCurrentToast(null);
    }, 4000);
  }, [unlockedAchievements, addXP]);

  // Check if section is viewed (for achievements)
  const checkSectionAchievement = useCallback((sectionId) => {
    const sectionAchievementMap = {
      about: 'curious',
      skills: 'skill_hunter',
      projects: 'project_viewer',
    };

    const achievementId = sectionAchievementMap[sectionId];
    if (achievementId) {
      unlockAchievement(achievementId);
    }
  }, [unlockAchievement]);

  // Check explorer achievement (scrolled past 90%)
  useEffect(() => {
    if (scrollProgress > 90) {
      unlockAchievement('explorer');
    }
  }, [scrollProgress, unlockAchievement]);

  // Reset all progress
  const resetProgress = useCallback(() => {
    setXp(0);
    setUnlockedAchievements([]);
    localStorage.removeItem(XP_STORAGE_KEY);
    localStorage.removeItem(ACHIEVEMENTS_STORAGE_KEY);
  }, []);

  return {
    xp,
    level,
    xpInCurrentLevel,
    xpPerLevel,
    scrollProgress,
    unlockedAchievements,
    currentToast,
    addXP,
    unlockAchievement,
    checkSectionAchievement,
    resetProgress,
    achievementCount: unlockedAchievements.length,
    totalAchievements: portfolioData.achievements?.length || 0,
  };
}
