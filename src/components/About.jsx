import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingLaptop from './ui/FloatingLaptop';
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
          <div className="about__3d-container" style={{ height: '400px', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 1, 6], fov: 45 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
              <FloatingLaptop />
              <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1} />
            </Canvas>
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
