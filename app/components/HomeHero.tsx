/* eslint-disable react/no-unescaped-entities */
'use client';
import dynamic from 'next/dynamic';

// three.js is heavy: load it in the browser only, so the text renders (and compiles) immediately
const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

export default function HomeHero() {
  return (
    <section className="home-hero" style={{ background: '#29402E' }}>
      <HeroCanvas />

      <div className="hero-text-container">
        <h1 className="hero-text">Heya! I'm Aspen!</h1>
        <p className="hero-text" style={{ fontSize: '2vh' }}>
          Shenanigans Extraordinaire
        </p>
      </div>
    </section>
  );
}
