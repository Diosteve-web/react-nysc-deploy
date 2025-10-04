import React from 'react';
import './Footer.css';
import FooterLogo from '../../assets/footer_logo.svg';
import UserIcon from '../../assets/user_icon.svg';
import mywork_data from '../../assets/patner.js'

const Footer = () => {
  return (
    <div  id="connect" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={FooterLogo} alt="NYSC Logo" />
          <p className="footer-title">National Youth Service Corps — Osun State Secretariat</p>
        </div>

        <div className="footer-top-right">
          <form className="footer-email-form">
            <div className="footer-input-group">
              <img src={UserIcon} alt="User Icon" />
              <label>Email Address</label>
              <input type="email" placeholder="Enter Your Email" name="email" />
            </div>
            <div className="footer-input-group">
              <label>Write your message here</label>
              <textarea placeholder="Your message..." name="message" rows="4" />
            </div>
            <button type="submit" className="footer-subscribe">Subscribe</button>
          </form>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>📧 swareaoffice@nysc.gov.ng</p>
          <p>📍 Osogbo, Osun State</p>
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="footer-partners">
        <h4>Partners in Osun State</h4>
        <div className="partner-list">
          {mywork_data.map((work, index) => (
            <div className="nysc-card" key={index}>
              <img src={work.w_img} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
