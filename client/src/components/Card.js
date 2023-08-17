import React, { useState } from 'react';

// Card component that displays project information and a modal on click
const Card = ({ title, description, screenshot, links, overview }) => {
  // State to track whether the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`card-border ${isModalOpen ? 'modal-open' : ''}`}>
      <div className="card-body">
        {/* Display project title */}
        <h5 className="card-title pb-2">{title}</h5>
        {/* Display project description */}
        <p className="card-text">{description}</p>
        {/* Button to open the modal */}
        <button className="btn btn-primary" onClick={toggleModal}>
          View Project
        </button>
      </div>
      {isModalOpen && (
        <div className="card-modal-overlay">
          <div className="custome-modal-content">
            <div className="modal-body">
              {/* Display modal project title */}
              <h3 className='border'>{title}</h3>
              {/* Display project overview */}
              <p>{overview}</p>
              {/* Map over array of object links and display the links */}
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  <a className='a-link' href={link.url}>{link.text}</a>
                  {index !== links.length - 1 && <br />}
                </React.Fragment>
              ))}
              {/* Display project screenshot */}
              <img src={screenshot} alt="Screenshot" className="modal-screenshot project-image" />
            </div>
            <div className="modal-footer top-border custom-modal-footer">
              {/* Button to close the modal */}
              <button className="btn btn-secondary custom-close" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
