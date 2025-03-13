import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import '../styles/Navbar.css';
import logo_light from '../assets/detaska_light.png';
import logo_dark from '../assets/detaska-dark.png';
import search_light from '../assets/search-light.png';
import search_dark from '../assets/search-dark.png';
import toggle_light from '../assets/light.png';
import toggle_dark from '../assets/dark.png';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <nav className="navbar-container">
        <div className="navbar">
          {/* Left Section - Logo */}
          <div className="navbar-left">
            <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className="logo"/>
          </div>

          {/* Center Section - Links */}
          <ul className="nav-links">
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
          </ul>

          {/* Right Section - Search & Theme Toggle */}
          <div className="navbar-right">
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <img src={theme === 'light' ? search_light : search_dark} alt="Search" />
            </div>

            {/* Theme Toggle Button */}
            <img 
              onClick={toggleTheme} 
              src={theme === 'light' ? toggle_dark : toggle_light} 
              alt="Toggle Theme" 
              className="toggle-icon"
            />
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
