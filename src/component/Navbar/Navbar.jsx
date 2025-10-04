import React, { useState, useRef } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import Logo from "../../assets/nysc.jpeg";
import { Link } from 'react-scroll';
import Menu_open from '../../assets/menu_open.svg';
import Menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar-logo" />

      {/* Open icon (only visible when menu is closed) */}
      {!isMenuOpen && (
        <img src={Menu_open} alt="menu_open" className="navbar-open" onClick={openMenu} />
      )}

      {/* Sidebar menu */}
      <ul ref={menuRef} className="navbar-menu">
        {/* Close icon (only visible when menu is open) */}
        {isMenuOpen && (
          <img src={Menu_close} alt="menu_close" className="navbar-close" onClick={closeMenu} />
        )}
        <li>
          <Link to="home" smooth={true} offset={-50} duration={500} onClick={() => setMenu("home")}>Home</Link>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link to="about" smooth={true} offset={-50} duration={500} onClick={() => setMenu("about")}>About</Link>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50} duration={500} onClick={() => setMenu("contact")}>Contact</Link>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link to="mywork" smooth={true} offset={-50} duration={500} onClick={() => setMenu("service")}>Service</Link>
          {menu === "service" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      <div>
        <Link to="connect" smooth={true} offset={-50} duration={500} className="nysc-connect-btn">Connect Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
