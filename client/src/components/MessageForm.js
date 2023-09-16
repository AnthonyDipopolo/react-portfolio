import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const MessageForm = () => {
  // State to manage modal and form data
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for form submission status

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setIsSubmitted(false);
  };

  // Function to show the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('message', formData.message);
    formDataObj.append('access_key', '9e788996-c3ac-4321-b586-4df8ce5771cb');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj,
      });

      const data = await response.json();
      if (data.success) {
        setResult('Form data submitted successfully');
        setIsSubmitted(true); // Set the submission status to true
        // Clear the form inputs
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult('Form data submission failed');
      }
    } catch (error) {
      setResult('An error occurred while submitting the form');
    }
    console.log('Result:', result);
  };

  return (
    <div className="pt-4 mt-4">
      <div className="text-center">
        {/* Button to open the modal */}
        <button
          className="no-underline icon-custome-color pointer"
          onClick={handleShowModal}
        >
          <FontAwesomeIcon icon={faMessage} className="mr-2" /> Contact Me
        </button>

        {/* Modal */}
        {showModal && (
          <div className="form-modal">
            <div className="form-modal-content">
              {/* Close button for the modal */}
              <span className="form-close" onClick={handleCloseModal}>&times;</span>
              {/* Form for user input */}
              <form onSubmit={handleSubmit}>
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
              {/* Display a success message if the form is submitted */}
              {isSubmitted && <p className='pt-2'>Message submitted!</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageForm;
