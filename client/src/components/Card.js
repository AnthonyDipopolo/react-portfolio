import React, { useState } from 'react';

const Card = ({ title, description, screenshot, links, overview }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`card-border ${isModalOpen ? 'modal-open' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={toggleModal}>
          View Project
        </button>
      </div>
      {isModalOpen && (
        <div className="card-modal-overlay">
          <div className="custome-modal-content">
            <div className="modal-body">
              <h3 className='border'>{title}</h3>
              <p>{overview}</p>
               {links.map((link, index) => (
                <React.Fragment key={index}>
                  <a className='a-link' href={link.url}>{link.text}</a>
                  {index !== links.length - 1 && <br />}
                </React.Fragment>
              ))}
              <img src={screenshot} alt="Screenshot" className="modal-screenshot" />
            </div>
            <div className="modal-footer top-border custom-modal-footer">
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
