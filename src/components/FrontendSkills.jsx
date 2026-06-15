import { portfolioData } from '../data/portfolioData';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import Tilt from 'react-parallax-tilt';
import './FrontendSkills.css';

export default function FrontendSkills() {
  const { frontendSkills } = portfolioData;
  const [setRef, visibleItems] = useStaggerAnimation(frontendSkills.length, 120);

  return (
    <section className="section section--alt" id="frontend">
      <div className="container">
        <SectionTitle>Frontend Development</SectionTitle>

        <div className="frontend__grid">
          {frontendSkills.map((skill, i) => (
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
                className={`frontend__card ${visibleItems[i] ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
              <i className={`${skill.icon} frontend__card-icon`} />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
