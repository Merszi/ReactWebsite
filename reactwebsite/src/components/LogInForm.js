import "./LogInForm.css";
import React, { useState } from 'react';
import axios from 'axios';

const LogInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      password: '',
    };

    if (!formData.username.trim()) {
      isValid = false;
      newErrors.username = 'Username is required';
    }

    if (!formData.password.trim()) {
      isValid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:3001/login', formData);

        if (response.data.success) {
          console.log('User logged in successfully');
        } else {
          console.error('Failed to log in Server response:', response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="login-input"
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="login-input"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit" className="login-button">Log In</button>
    </form>
  );
};

export default LogInForm;
