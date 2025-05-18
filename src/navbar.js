import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          <img src = "/raccoon 5.png" alt = "raccoon!" class = "logo-image"/>
        </a>
        <div
          className={`navbar__toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
          id="mobile-menu"
          onClick={handleMobileMenuToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <a href="#home" className="navbar__links">
              home
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__links">
              about
            </a>
          </li>
          <li className="navbar__item">
            <a href="#stuff" className="navbar__links">
              stuff
            </a>
          {/* </li><li className="navbar__item">
            <a href="/blog.html" className="navbar__links">
              blog
            </a> */}
          </li><li className="navbar__item">
            <a href="#contact" className="navbar__links">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;