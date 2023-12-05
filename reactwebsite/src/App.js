// App.js
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/HomePage';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';
import LogIn from './routes/LogIn';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
