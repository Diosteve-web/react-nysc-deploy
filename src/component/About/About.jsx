import React from 'react';
import './about.css';
//import themePattern from '../../assets/theme_pattern.png';
import Agbor from '../../assets/nysc.jpeg';
import event1 from '../../assets/background.jpeg';
import event2 from '../../assets/event.jpg';

const AboutStateCoordinator = () => {
  return (
    <div id="about" className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <h1>State Coordinator</h1>
        <img src={Agbor} alt="NYSC Theme Pattern" />
      </div>

      {/* Main Content */}
      <div className="about-content">
        <div className="about-image">
          <img src={Agbor} alt="Mr. Agbor Ndoma Obim" />
        </div>

        <div className="about-description">
          <p>
            Mr. Agbor Ndoma Obim is the esteemed NYSC Osun State Coordinator,
            entrusted with guiding and overseeing corps members throughout the state.
            His leadership ensures effective orientation, deployment, welfare, and discipline.
            He actively fosters partnerships with government bodies, host communities,
            and institutions to strengthen the impact of the NYSC scheme.
          </p>
          <p>
            Under his stewardship, the NYSC in Osun State continues to uphold the values
            of national unity, youth empowerment, and community development.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-card">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> agbor.ndoma@nysc.gov.ng</p>
        <p><strong>Phone:</strong> +234 803 123 4567</p>
        <p><strong>Office:</strong> NYSC Secretariat, Osogbo, Osun State</p>
      </div>

      {/* Quick Facts */}
      <div className="quick-facts">
        <h2>Quick Facts</h2>
        <ul>
          <li>🎓 Over 15 years in public service</li>
          <li>🤝 Collaborated with 30+ institutions</li>
          <li>📍 Based in Osogbo, Osun State</li>
          <li>🌍 Promotes national integration</li>
        </ul>
      </div>

      {/* Quote Section */}
      <div className="coordinator-quote">
        <blockquote>
          "Service to the nation is not just a duty—it's a privilege. Let us build unity through action."
        </blockquote>
        <p>— Mr. Agbor Ndoma Obim</p>
      </div>

      {/* Timeline Section */}
      <div className="timeline">
        <h2>Milestones</h2>
        <ul>
          <li><strong>2021:</strong> Launched NYSC Skill Acquisition Program</li>
          <li><strong>2022:</strong> Partnered with Osun Tech Hub</li>
          <li><strong>2023:</strong> Introduced Health Outreach Initiative</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src={event1} alt="Orientation Camp" />
          <img src={event2} alt="Community Project" />
        </div>
      </div>
    </div>
  );
};

export default AboutStateCoordinator;