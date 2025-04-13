import React from 'react';
import { FaEnvelope, FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-content'>
      <h1>Contact Me</h1>
        <p>
            I'd love to hear from you! Feel free to reach out through any of the following channels:
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <a href="mailto:shivanirudh2001@gmail.com" target="_blank" rel="noopener noreferrer"><h2><FaEnvelope className="contact-icon" /></h2></a>
          </div>
          <div className="contact-item">
            <a href="https://github.com/Shivanirudh" target="_blank" rel="noopener noreferrer"><h2><FaGithub className="contact-icon" /></h2></a>
          </div>
          <div className="contact-item">
            <a href="https://x.com/shivanirudh4" target="_blank" rel="noopener noreferrer"><h2><FaXTwitter className="contact-icon" /></h2></a>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/shivanirudh-s-g/" target="_blank" rel="noopener noreferrer"><h2><FaLinkedin className="contact-icon" /></h2></a>
          </div>
        </div>
    </div>
  );
}

export default Contact;