import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Dogschool</h1>

                <ul className="nav-menu">
                    <li>
                        <a href="/">
                        <i className="fa-solid fa-house"></i>Home
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;