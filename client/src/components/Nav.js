import React from 'react';

const Nav = () => {
  return (
    // Navigation bar
    <nav className="navbar pt-4">
      {/* Container for navigation elements */}
      <div className="container-fluid custome-navbar">
        <div className="align-items-center justify-content-center" id="navbarNav">
          {/* Unordered list for navigation links */}
          <ul className="navbar-nav flex-column text-center">
            {/* Home link */}
            <li className="nav-item">
              <a className="nav-link custome-navbar-hover custome-navbar align-items-center" aria-current="page" href="#home">
                Home
              </a>
            </li>
            {/* Skills link */}
            <li className="nav-item">
              <a className="nav-link custome-navbar-hover custome-navbar" href="#languages">
                Skills
              </a>
            </li>
            {/* Projects link */}
            <li className="nav-item">
              <a className="nav-link custome-navbar-hover custome-navbar" href="#projects">
                Projects
              </a>
            </li>
            {/* Connect with Me link */}
            <li className="nav-item">
              <a className="nav-link custome-navbar-hover custome-navbar" href="#contact-me">
                Connect with Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
