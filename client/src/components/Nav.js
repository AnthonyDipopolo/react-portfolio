import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar pt-5">
      <div className="container-fluid custome-navbar">
        <div className="align-items-center justify-content-center" id="navbarNav">
          <ul className="navbar-nav flex-column text-center"> {/* Added text-center class */}
            <li className="nav-item">
              <a className="nav-link custome-navbar-hover custome-navbar align-items-center" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custome-navbar-hover custome-navbar" href="#languages">
                Languages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custome-navbar-hover custome-navbar" href="#projects">
                Projects
              </a>
            </li>
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
