import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';

ReactDOM.render(
  <Router>
  <AuthProvider>
    <App />
  </AuthProvider>
  </Router>,
  document.getElementById('root')
);
