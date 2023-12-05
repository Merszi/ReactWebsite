import React from "react";
import "./Navbar.css";
import { Menu } from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(navigate);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Paws & Play</h1>
      <div className="menu-icons">
        <i className="fas fa-bars"></i>
      </div>
      <ul className="nav-menu">
        {Menu.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>{item.title}
            </Link>
          </li>
        ))}
        {isAuthenticated() ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
