import { portfolioData } from '../data/portfolioData';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import './Certifications.css';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [setRef, visibleItems] = useStaggerAnimation(certifications.length, 120);

  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionTitle>Certifications</SectionTitle>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <a
              key={i}
              ref={setRef(i)}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`certs__card ${visibleItems[i] ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <i className={`${cert.icon} certs__card-icon`} />
              <h3>{cert.title}</h3>
              <p className="certs__card-issuer">{cert.issuer}</p>
              <span className="certs__card-date">{cert.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
