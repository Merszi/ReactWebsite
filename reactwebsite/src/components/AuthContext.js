import React, { createContext, useContext, useState } from 'react';
import { loginUser, logoutUser } from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password, navigate) => {
    try {
      const response = await loginUser(username, password);
      setUser(response.user);
      navigate('/');
      return response;
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  };

  const logout = async (navigate) => {
    try {
      const response = await logoutUser();
      setUser(null);
      navigate('/logout'); // Redirect to the logout page
      return response;
    } catch (error) {
      console.error('Logout failed:', error.message);
      throw error;
    }
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log('AuthContext user:', context.user);
  return context;
};
