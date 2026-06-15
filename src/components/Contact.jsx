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
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Web3Forms API Integration
    const accessKey = "779735d3-ea98-4629-ab18-10ccffd1a938"; 

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setStatus('error');
      alert("Please provide your Web3Forms Access Key to the AI to activate the contact form!");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }

    setTimeout(() => setStatus(null), 5000);
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

            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }} />
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane" style={{ marginRight: '8px' }} />
                  Send Message
                </>
              )}
            </Button>

            {status === 'success' && (
              <p style={{ color: 'var(--accent-color)', textAlign: 'center', marginTop: '10px' }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff4a5a', textAlign: 'center', marginTop: '10px' }}>
                ✗ Oops! Something went wrong. Make sure the Access Key is configured!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
