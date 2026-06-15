import { portfolioData } from '../data/portfolioData';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import Tilt from 'react-parallax-tilt';
import './Education.css';

export default function Education() {
  const { education } = portfolioData;
  const [setRef, visibleItems] = useStaggerAnimation(education.length, 200);

  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <SectionTitle>Education</SectionTitle>

        <div className="education__timeline">
          <div className="education__timeline-line" aria-hidden="true" />

          {education.map((item, i) => (
            <div
              key={i}
              ref={setRef(i)}
              className={`education__item ${visibleItems[i] ? 'visible' : ''} ${
                item.isFuture ? 'education__item--future' : ''
              }`}
            >
              <div className="education__marker">
                <i className={item.icon} />
              </div>

              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#00ff88"
                glarePosition="all"
                glareBorderRadius="16px"
                className="education__content-tilt-wrapper"
              >
                <div className="education__content">
                <span className="education__year">{item.year}</span>
                <h3>{item.title}</h3>
                <h4>{item.institution}</h4>
                <p className="education__grade">{item.grade}</p>
                <p>{item.description}</p>

                {item.skills?.length > 0 && (
                  <div className="education__skills">
                    {item.skills.map((skill, j) => (
                      <span key={j} className="education__skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
