/* eslint-disable react/no-unescaped-entities */
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; // <-- import the icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoLoop from './logo-loop/logo-loop';

const logos = [
  { node: <FontAwesomeIcon icon={faGithub} />, title: 'Github', href: 'https://github.com/Kousei-Uchu' },
  { node: <FontAwesomeIcon icon={faEnvelope} />, title: 'Email', href: 'mailto:hello@sorren.me' },
  { node: <FontAwesomeIcon icon={faInstagram} />, title: 'Instagram', href: 'https://www.instagram.com/kouseicubed/' },
  { node: <FontAwesomeIcon icon={faYoutube} />, title: 'YouTube', href: 'https://www.youtube.com/@KouseiCubed' },
];

export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-text">If you'd like to get in touch, feel free to reach out via email or social media!</p>
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={logos}
          speed={100}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor='#121212'
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
