import { portfolioData } from '../data/portfolioData';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import Tilt from 'react-parallax-tilt';
import './Responsibilities.css';

export default function Responsibilities() {
  const { responsibilities } = portfolioData;
  const [setRef, visibleItems] = useStaggerAnimation(responsibilities.length, 150);

  return (
    <section className="section" id="responsibilities">
      <div className="container">
        <SectionTitle>Positions of Responsibility</SectionTitle>

        <div className="responsibilities__container">
          {responsibilities.map((item, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#00ff88"
              glarePosition="all"
              glareBorderRadius="16px"
              scale={1.02}
            >
              <div
                ref={setRef(i)}
                className={`responsibilities__card ${visibleItems[i] ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
              <h3>{item.title}</h3>
              <p className="responsibilities__org">{item.organization}</p>
              <p className="responsibilities__date">{item.date}</p>
              {Array.isArray(item.description) ? (
                <ul className="responsibilities__list">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
