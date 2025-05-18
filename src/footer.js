import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './footer.css'; // Create a Footer.css file for styling

function Footer() {
  return (
    <footer className="simple-footer">
      <div className="social-links">
        <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={30} />
        </a>
        <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={30} />
        </a>
        <a href="mailto:YOUR_EMAIL_ADDRESS" className="social-icon">
          <FaEnvelope size={30} />
        </a>
      </div>
      <p className="copyright">made with ♡ and apple juice</p>
    </footer>
  );
}

export default Footer;