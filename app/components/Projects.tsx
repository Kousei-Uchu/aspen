'use client';

import SpotlightCard from './spotlight-card/spotlight-card';

export default function Projects() {
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
        <h2 className="projects-section-title">Projects</h2>
        <p className="projects-section-subtitle">A selection of my works and creations.</p>
      </div>

      <div className="projects-grid">
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
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 150, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Sequoia Support</h3>
              <p className="project-card-description">
                My semi-existant organisation that aims to support neurodivergent and marginalised individuals and facilitate self-confidence and advocacy. Currently in limbo.
              </p>
            </div>
          </SpotlightCard>
          </a>
          <a href="https://helpingpaw.sequoiasupport.com" className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 150, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Helping Paw</h3>
              <p className="project-card-description">
                A Sequoia Support platform designed to assist students who are unable to approach teachers directly for help, providing a private and digital to signal for support. With timetable integration and teacher determination.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="https://profiles.sequoiasupport.com" className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 150, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Sequoia Profiles</h3>
              <p className="project-card-description">
                Sequoia Support Profiles is a platform that allows individuals with additional support needs to create detailed profiles about them, along with their needs and sensitivities, to share with others to encourage understanding and support.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="#" onClick={handleMaintaining} className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 150, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Botkisser</h3>
              <p className="project-card-description">
                An all purposes Discord bot with a focus on fun and utility, featuring games, moderation tools, leveling, access control, stickies, tickets, logging, and more. Currently in private use only.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="#" onClick={handleMaintaining} className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 150, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">SoberTrack</h3>
              <p className="project-card-description">
                A comprehensive sobriety tracking app designed to help users monitor their journey towards recovery. Features include milestone tracking, motivational quotes, and many other features. Currently under development.
              </p>
            </div>
          </SpotlightCard>
        </a>
        <a href="#" onClick={handleMaintaining} className="project-card-link-overlay" aria-label="Calendair">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 150, 0.2)">
            <div className="project-card-content">
              <h3 className="project-card-title">Sequoia Social</h3>
              <p className="project-card-description">
                An all in one Matrix based social platform designed for a more pleasant experience for neurodivergent and marginalised individuals, as well as the average Joe alike, with bridges to many other messaging apps. Currently on the backburner.
              </p>
            </div>
          </SpotlightCard>
        </a>
      </div>
    </section>
  );
}
