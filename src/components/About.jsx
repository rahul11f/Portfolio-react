import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import './About.css';

export default function About({ onVisible }) {
  const [ref, isVisible] = useScrollAnimation();
  const { about, personal } = portfolioData;

  if (isVisible && onVisible) onVisible();

  return (
    <section className="section section--alt" id="about" ref={ref}>
      <div className="container">
        <SectionTitle>{about.title}</SectionTitle>

        <div className={`about__content fade-in ${isVisible ? 'visible' : ''}`}>
          <div 
            className="about__3d-container" 
            style={{ 
              height: '400px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: '2px dashed rgba(0, 255, 136, 0.3)', 
              borderRadius: 'var(--border-radius)',
              background: 'rgba(0, 255, 136, 0.02)'
            }}
          >
            <div style={{ textAlign: 'center', color: 'var(--accent-color)' }}>
              <i className="fas fa-robot" style={{ fontSize: '3rem', marginBottom: '15px', opacity: 0.8 }} />
              <p style={{ fontWeight: '500', letterSpacing: '1px' }}>[ Reserved for 3D Robotic Animation ]</p>
            </div>
          </div>

          <div className="about__text">
            <h3>Who am I?</h3>
            {about.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="about__highlights">
              {about.highlights.map((item, i) => (
                <div key={i} className="about__highlight">
                  <i className={item.icon} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
