import { portfolioData } from '../data/portfolioData';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import Tilt from 'react-parallax-tilt';
import './Training.css';

export default function Training() {
  const { training } = portfolioData;
  const [setRef, visibleItems] = useStaggerAnimation(training.length, 150);

  return (
    <section className="section" id="training">
      <div className="container">
        <SectionTitle>Training & Workshops</SectionTitle>

        <div className="training__container">
          {training.map((item, i) => (
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
                className={`training__card ${visibleItems[i] ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
              <h3>{item.title}</h3>
              <p className="training__org">{item.organization}</p>
              <p className="training__date">{item.date}</p>
              <p>{item.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
