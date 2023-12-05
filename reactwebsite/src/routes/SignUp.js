import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from "../components/Hero";
import contactImg from "../images/contactdog.jpg";
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      console.log(response.data);

      setSuccessMessage(response.data.message);

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        title="SignUp"
        btnClass="hide"
      />
  
      <div>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <SignUpForm
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

export default SignUp;
