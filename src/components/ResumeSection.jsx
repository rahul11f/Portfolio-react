import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import './ResumeSection.css';

export default function ResumeSection() {
  const [ref, isVisible] = useScrollAnimation();
  const { personal } = portfolioData;

  return (
    <section className="section section--alt resume" id="resume" ref={ref}>
      <div className="container">
        <SectionTitle>Resume</SectionTitle>

        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="resume__description">
            Interested in my full background and qualifications? Download my resume or
            view it online to learn more about my experience, skills, and education.
          </p>

          <div className="resume__actions">
            <Button href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download" style={{ marginRight: '8px' }} />
              Download Resume
            </Button>
            <Button
              href={personal.resumeUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-eye" style={{ marginRight: '8px' }} />
              View Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
