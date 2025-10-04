import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import phone from '../../assets/call_icon.svg';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_s1sxavf',     // 🔑 Replace with your EmailJS service ID
      'template_waancek',    // 🧾 Replace with your EmailJS template ID
      form.current,
      '1Im-iJslW7bjzOC7O'      // 🔐 Replace with your EmailJS public key
    )
    .then(() => alert("Message sent successfully!"))
    .catch(() => alert("Failed to send message."));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Osun State Coordinator</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Reach out to the NYSC Osun State Secretariat for inquiries, feedback, or official correspondence.
            We are committed to serving corps members and stakeholders with professionalism and integrity.
          </p>

          <div className="contact-detail">
            <div className="contact-details">
              <img src={mail} alt="Email Icon" />
              <p>swareaoffice@nysc.gov.ng</p>
            </div>
            <div className="contact-details">
              <img src={phone} alt="Phone Icon" />
              <p>+234 803 000 0000</p>
            </div>
            <div className="contact-details">
              <img src={location} alt="Location Icon" />
              <p>NYSC Secretariat, Osogbo, Osun State</p>
            </div>
          </div>
        </div>

        <form className="contact-right" ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="user_name" required />
          <label>Email Address</label>
          <input type="email" placeholder="Enter Your Email" name="user_email" required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="button-contact">Submit Here</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
