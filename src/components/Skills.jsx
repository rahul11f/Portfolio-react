import { portfolioData } from '../data/portfolioData';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import Tilt from 'react-parallax-tilt';
import './Skills.css';

export default function Skills({ onVisible }) {
  const { skills } = portfolioData;
  const [setRef, visibleItems] = useStaggerAnimation(skills.length, 120);

  const anyVisible = visibleItems.some(Boolean);
  if (anyVisible && onVisible) onVisible();

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle>Technical Skills</SectionTitle>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#00ff88"
              glarePosition="all"
              glareBorderRadius="16px"
              scale={1.05}
            >
              <div
                ref={setRef(i)}
                className={`skills__card ${visibleItems[i] ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
              <i className={`${skill.icon} skills__card-icon`} />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              {skill.proficiency != null && (
                <div className="skills__progress">
                  <div className="skills__progress-label">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="skills__progress-bar">
                    <div
                      className={`skills__progress-fill ${visibleItems[i] ? 'animate' : ''}`}
                      style={{ width: visibleItems[i] ? `${skill.proficiency}%` : '0%' }}
                    />
                  </div>
                </div>
              )}
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
