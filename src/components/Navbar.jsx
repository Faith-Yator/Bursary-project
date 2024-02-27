import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaBook, FaCogs, FaToolbox } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FiX, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen ? <FiX /> : <i className="fa-solid fa-bars"></i>}
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen && (
            <div className="close-icon">
              <FiX />
            </div>
          )}

          <li className="nav-item">
            <Link to="/" className="nav-link">
              <AiFillHome />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <FaToolbox />
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/application" className="nav-link">
              <FaCogs />
              Application
            </Link>
          </li>
  
          <li className="nav-item">
            <Link to="" className="nav-link">
              <RiContactsFill />
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
             <button>SignIn</button> 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
