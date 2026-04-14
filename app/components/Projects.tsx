/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState, useRef } from 'react';
import SpotlightCard from './spotlight-card/spotlight-card';
import { Resize } from '@react-three/drei';

export default function Projects() {

  const [showAll, setShowAll] = useState(false);
  const [height, setHeight] = useState<number | null>(null);
  const [canToggle, setCanToggle] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);

  // Measure full height of grid for smooth transition
  useEffect(() => {
    const handleCollapsing = () => {if (gridRef.current) {
      const fullHeight = gridRef.current.scrollHeight;
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const collapsedHeight = (225 + 2 * rem) * 3;
      setHeight(fullHeight);
      if (fullHeight <= (collapsedHeight) || window.innerWidth > 805) {
        setShowAll(true);
        setCanToggle(false);
      } else {
        setCanToggle(true);
      }
    }
}

handleCollapsing()

addEventListener('resize', handleCollapsing)

    return () => {
        window.removeEventListener('resize', handleCollapsing)
    }
  }, [showAll]);

  const toggleShowAll = () => setShowAll(prev => !prev);

  
  const handleAlreadyHere = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("You can't go to a page you're already on silly! :P");
  };

  const handleMaintaining = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Oops, you found a hole! This project page is still under maintenance. Stay tuned!");
  };

  return (
    <section className="projects-section">
      <div className="projects-section-header">
        <h2 className="projects-section-title">My Projects</h2>
        <p className="projects-section-subtitle">A selection of my works and creations.</p>
      </div>

      <div
        ref={gridRef}
        className={`projects-grid ${showAll ? 'expanded' : 'collapsed'}`}
        style={{
          maxHeight: showAll ? `${height}px` : 'calc((300px + 2rem) * 3)',
          transition: 'max-height 0.8s ease-in-out',
        }}
      >
        <a href="#" onClick={handleAlreadyHere} className="project-card-link-overlay" aria-label="This Website">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 0, 150, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">This Website</h3>
              <p className="project-card-description">
                The very website you're on right now! Not super special, but my playground for new design ideas and web technologies. It's a hub where all of my creations come together, and it's mine.
              </p>
            </div>
          </SpotlightCard>
        </a>

        <a href="https://silvershots.sorren.me" className="project-card-link-overlay" aria-label="Silvershots" target="_blank" rel="noopener noreferrer">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 200, 255, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Silvershots</h3>
              <p className="project-card-description">
                My site to showcase all of my photography, with dynamic nested loading of images in a Google Drive, lightboxes, data overrides, automatic watermarking, and APIs.
              </p>
            </div>
          </SpotlightCard>
        </a>

        <a href="https://characters.sorren.me" className="project-card-link-overlay" aria-label="Silvershots" target="_blank" rel="noopener noreferrer">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(141, 10, 10, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Character Library</h3>
              <p className="project-card-description">
                One of my websites to showcase all of the various characters I've created, with dynamic page generation, and some other fun bits and pieces.
              </p>
            </div>
          </SpotlightCard>
        </a>

        <a href="#" onClick={handleMaintaining} className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 150, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Calendair</h3>
              <p className="project-card-description">
                A touchscreen, Raspberry Pi based digital scheduling calendar, with a built in Photo Frame! Featuring integration with Google Calendar, and more to come!
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="https://sequoiasupport.com" className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 0, 0, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Sequoia Support</h3>
              <p className="project-card-description">
                My semi-existant organisation that aims to support neurodivergent and marginalised individuals and facilitate self-confidence and advocacy. Currently in limbo.
              </p>
            </div>
          </SpotlightCard>
          </a>
          <a href="https://helpingpaw.sequoiasupport.com" className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 8, 255, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Helping Paw</h3>
              <p className="project-card-description">
                A Sequoia Support platform designed to assist students who are unable to approach teachers directly for help, providing a private and digital to signal for support. With timetable integration and teacher determination.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="https://profiles.sequoiasupport.com" className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 221, 255, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Sequoia Profiles</h3>
              <p className="project-card-description">
                Sequoia Support Profiles is a platform that allows individuals with additional support needs to create detailed profiles about them, along with their needs and sensitivities, to share with others to encourage understanding and support.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="https://github.com/Kousei-Uchu/BotKisser" className="project-card-link-overlay" aria-label="Botkisser">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 221, 0, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Botkisser</h3>
              <p className="project-card-description">
                An all purposes Discord bot with a focus on fun and utility, featuring games, moderation tools, leveling, access control, stickies, tickets, logging, and more. Currently in private use only.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="#" onClick={handleMaintaining} className="project-card-link-overlay" aria-label="SoberTrack">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 0, 153, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">SoberTrack</h3>
              <p className="project-card-description">
                [ABANDONED] A comprehensive sobriety tracking app designed to help users monitor their journey towards recovery. Features include milestone tracking, motivational quotes, and many other features. Currently under development.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="#" onClick={handleMaintaining} className="project-card-link-overlay" aria-label="Sequoia Social">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(242, 255, 0, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Sequoia Social</h3>
              <p className="project-card-description">
                [ABANDONED] An all in one Matrix based social platform designed for a more pleasant experience for neurodivergent and marginalised individuals, as well as the average Joe alike, with bridges to many other messaging apps. Currently on the backburner.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="https://github.com/Kousei-Uchu/pride-pkg" className="project-card-link-overlay" aria-label="Pride Package">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 0, 242, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Pride Package</h3>
              <p className="project-card-description">
                A fairly simple package for React with customisable Pride Flag assets, and more to come! Still developing!
              </p>
            </div>
          </SpotlightCard>
        </a>
        </div>

      {canToggle && (
        <button className="show-more-btn" onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  );
}
