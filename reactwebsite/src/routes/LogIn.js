import React, { useState } from 'react';
import LogInForm from '../components/LogInForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from "../components/Hero";
import contactImg from "../images/contactdog.jpg";
import axios from 'axios';

const LogIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData); // Assuming the login endpoint is '/api/login'
      console.log(response.data);

      setSuccessMessage(response.data.message);

      setFormData({
        username: '',
        password: '',
      });

      setErrors({});
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);

      setSuccessMessage('');
      setErrors(error.response?.data?.errors || {});
    }
  };

  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={contactImg}
        title="LogIn" 
        btnClass="hide"
      />
  
      <div>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <LogInForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
  
      <Footer />
    </>
  );
};

export default LogIn;
