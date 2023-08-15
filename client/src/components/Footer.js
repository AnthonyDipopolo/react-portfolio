import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-footer-custome text-center"> {/* Add the text-center class here */}
      <div className="footer footer-ml">
        <div className="row">
          <div className="col-md-6 mt-4 footer">
            <h4 id="contact-me">Contact Me</h4>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone: +1 (201) 998-5209
            </p>
            <a href="mailto:anthony.dipopolo@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon-custome-color"
              />{' '}
              Email: anthony.dipopolo@gmail.com{' '}
            </a>
          </div>
          <div className="col-md-6 mt-4">
            <h4>Follow Me</h4>
            <div className="social-icons d-flex justify-content-center">
              <a
                className="icon-link icon-link-hover no-underline icon-custome-color"
                style={{ '--bs-link-hover-color-rgb': '25, 135, 84' }}
                href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.81563920.603397782.1688608204-462463860.1688608204&_gac=1.94580206.1688608671.CjwKCAjwqZSlBhBwEiwAfoZUIO_Zkrjj3CJmzc60eAmhRnz4IngxKRrG3zeB_sdfg-gJbkU2J1djeRoC3G4QAvD_BwE"
              >
                <FontAwesomeIcon icon={faUser} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/anthony-dipopolo-4a65bb263/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  className="p-2 icon-custome-color"
                />
              </a>
              <a href="https://github.com/AnthonyDipopolo">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="p-2 icon-custome-color"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




