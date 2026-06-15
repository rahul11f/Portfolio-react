import { useState, useEffect, useCallback } from 'react';
import { portfolioData } from '../data/portfolioData';
import ParticleBackground from './ui/ParticleBackground';
import Button from './ui/Button';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CyberCube from './ui/CyberCube';
import './Hero.css';

export default function Hero() {
  const { personal, hero, features } = portfolioData;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typeText = useCallback(() => {
    const currentFullText = hero.typingTexts[currentTextIndex];

    if (!isDeleting) {
      setDisplayedText(currentFullText.substring(0, displayedText.length + 1));

      if (displayedText.length === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setDisplayedText(currentFullText.substring(0, displayedText.length - 1));

      if (displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % hero.typingTexts.length);
        return;
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, hero.typingTexts]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(typeText, speed);
    return () => clearTimeout(timer);
  }, [typeText, isDeleting]);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="hero__shapes" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="hero__shape" />
        ))}
      </div>

      {features.enableParticles && <ParticleBackground count={25} />}

      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__greeting">{hero.greeting}</p>
          <h1 className="hero__name">{personal.name}</h1>
          <p className="hero__subtitle">
            <span className="hero__typing">{displayedText}</span>
          </p>
          <p className="hero__description">{personal.subtitle}</p>
          <div className="hero__buttons">
            <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.text}</Button>
            <Button href={hero.ctaSecondary.href} variant="secondary">
              {hero.ctaSecondary.text}
            </Button>
          </div>
        </div>

        <div className="hero__3d-container">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ccff" />
            <CyberCube />
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2} />
          </Canvas>
        </div>
      </div>

      <button
        className="hero__scroll-indicator"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about section"
      >
        <i className="fas fa-chevron-down" />
      </button>
    </section>
  );
}
