import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './footer.css'; // Create a Footer.css file for styling

function Footer() {
  return (
    <footer className="simple-footer">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/rachaelni/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/rayfieds" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={30} />
        </a>
        <a href="mailto:rachael.sy.ni@gmail.com" className="social-icon">
          <FaEnvelope size={30} />
        </a>
      </div>
      <p className="copyright">made with ♡ and apple juice</p>
    </footer>
  );
}

export default Footer;