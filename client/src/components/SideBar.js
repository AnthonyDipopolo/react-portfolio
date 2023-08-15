import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
import MessageForm from './MessageForm';

const StickySidebar = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/anthonyResume.pdf';
    link.download = 'anthonyResume.pdf';
    link.click();
  };

  return (
    <div className="pt-0">
      {/* Sticky sidebar */}
      <div className="custome-bg-color p-1 mx-auto" id="sticky-sidebar">
        <div className="sidebar-content">
          {/* Display name */}
          <h5 className="text-center pt-4">Anthony Di Popolo</h5>
          {/* Display profile image */}
          <img
            src="https://placehold.co/100x100"
            className="rounded-circle d-block mx-auto"
            alt="head shot"
          />
          {/* Introduction */}
          <p className="text-center pb-5 pt-3">
            Hi, my name is Anthony Di Popolo and I'm a full stack developer. Welcome to my personal website!
          </p>
        </div>
        {/* Row for social links and navigation */}
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              {/* GitHub link */}
              <a
                className="icon-link icon-link-hover no-underline mb-3 icon-custome-color"
                style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }}
                href="https://github.com/AnthonyDipopolo"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              {/* Resume download link */}
              <a
                className="icon-link icon-link-hover no-underline mb-3 icon-custome-color"
                style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }}
                href="/assets/resume/anthonyResume.pdf"
                onClick={handleDownload}
              >
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </a>
              {/* LinkedIn link */}
              <a
                className="icon-link icon-link-hover no-underline mb-3 icon-custome-color"
                style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }}
                href="https://www.linkedin.com/in/anthony-dipopolo-4a65bb263/"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            {/* Render navigation */}
            <Nav />
            {/* Render MessageForm */}
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySidebar;