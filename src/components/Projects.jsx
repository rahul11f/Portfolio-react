import { portfolioData } from '../data/portfolioData';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

export default function Projects({ onVisible }) {
  const { projects } = portfolioData;
  const [setRef, visibleItems] = useStaggerAnimation(projects.length, 120);

  const anyVisible = visibleItems.some(Boolean);
  if (anyVisible && onVisible) onVisible();

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#00ff88"
              glarePosition="all"
              glareBorderRadius="16px"
              scale={1.02}
              transitionSpeed={2000}
            >
              <div
                ref={setRef(i)}
                className={`projects__card ${visibleItems[i] ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
              <div className="projects__image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="projects__image-placeholder">
                    <i className="fas fa-code" />
                  </div>
                )}
              </div>

              <div className="projects__info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="projects__tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projects__links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      <i className="fab fa-github" /> GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      <i className="fas fa-external-link-alt" /> Demo
                    </a>
                  )}
                </div>
              </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
