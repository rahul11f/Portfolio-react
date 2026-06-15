import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import './Contact.css';

export default function Contact() {
  const { contact } = portfolioData;
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success. Wire up to your preferred service.
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="section section--alt" id="contact" ref={ref}>
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className={`contact__grid fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="contact__info">
            <h3>Let&apos;s Connect</h3>
            <p>
              Feel free to reach out if you want to collaborate on a project, have a
              question, or just want to say hello!
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <i className="fas fa-envelope" />
                <span>{contact.email}</span>
              </div>
              <div className="contact__detail">
                <i className="fas fa-phone" />
                <span>{contact.phone}</span>
              </div>
              <div className="contact__detail">
                <i className="fas fa-map-marker-alt" />
                <span>{contact.location}</span>
              </div>
            </div>

            <div className="contact__socials">
              {contact.socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                  aria-label={link.label}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__form-textarea"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit">
              <i className="fas fa-paper-plane" style={{ marginRight: '8px' }} />
              Send Message
            </Button>

            {status === 'success' && (
              <p style={{ color: 'var(--accent-color)', textAlign: 'center', marginTop: '10px' }}>
                ✓ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
