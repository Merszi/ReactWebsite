import { Component } from "react";
import "./Navbar.css";
import { Menu } from "./Menu";

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Dogschool</h1>

                <ul className="nav-menu">
                    {Menu.map((item, index) => {
                       return(
                        <li key={index}>
                            <a className= {item.cName} href="/">
                            <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                       ) 
                    })}
                    <button>Sign up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;