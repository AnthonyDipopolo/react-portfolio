import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';


const MessageFrom = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
     
      handleCloseModal();
    };
  
    return (
      <div className="pt-5 mt-5">
      <div className="text-center">
        <button
          className="no-underline icon-custome-color pointer"
          onClick={handleShowModal}
        >
          <FontAwesomeIcon icon={faMessage} className="mr-2" /> Contact Me 
        </button>
  
          {/* Modal */}
          {showModal && (
            <div className="form-modal">
              <div className="form-modal-content z-index">
                <span className="form-close" onClick={handleCloseModal}>&times;</span>
                <form className="z-index" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button className='form-button' type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default MessageFrom;
  