'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // <-- import the icon
import LogoLoop from './logo-loop/logo-loop';

const logos = [
  { node: <FontAwesomeIcon icon={faGithub} />, title: 'Github', href: 'https://github.com/Kousei-Uchu' },
];

export default function Contact() {
  return (
    <section className="contact-page">
      <h1>Contact Me</h1>
      <p>If you'd like to get in touch, feel free to reach out via email or social media!</p>
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={logos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
