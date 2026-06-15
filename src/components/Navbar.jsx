import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 20px rgba(0,0,0,0.5)' } : {}}>
      <div className="container navbar__container">
        <a href="#hero" className="navbar__logo">
          {'<'}{portfolioData.personal.firstName} {'/>'} 
        </a>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>

        <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="navbar__link" onClick={handleNavClick}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={portfolioData.personal.resumeUrl}
              className="navbar__link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
