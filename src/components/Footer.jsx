import { portfolioData } from '../data/portfolioData';
import './Footer.css';

const FOOTER_NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { footer, contact } = portfolioData;

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__socials">
          {contact.socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label={link.label}
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>

        <div className="footer__links">
          {FOOTER_NAV.map((item) => (
            <a key={item.href} href={item.href} className="footer__link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer__divider" />

        <p className="footer__tagline">{footer.tagline}</p>
        <p className="footer__copyright">{footer.copyright}</p>
      </div>
    </footer>
  );
}
