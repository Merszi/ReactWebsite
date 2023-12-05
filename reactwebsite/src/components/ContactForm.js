// ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Import your existing CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API endpoint
      const response = await axios.post('http://localhost:5000/api/contact', formData);

      // Handle success
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      // Handle error
      console.error('Error:', error.response?.data || error.message);
      setSuccessMessage('');
      setErrorMessage('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2 className="form-header">Contact Us</h2>
        <p className="form-subheader">We'd love to hear from you!</p>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default ContactForm;
