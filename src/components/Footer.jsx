import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaComments } from 'react-icons/fa'; // Import Font Awesome icons
import { RiShieldKeyholeLine, RiHomeGearLine, RiBuilding2Line } from 'react-icons/ri'; // Import Material-UI icons


function Footer() {
  return (
    <div className='footer'>
      <div className='bottom'>
        
        <div>
          <h4>Get in touch</h4>
          <a href='/'>
            <FaPhone /> Tel.: +254 711 069 999
          </a>
          <a href='/'>
            <FaEnvelope /> Email: info@bursaryapp.co.ke
          </a>
        </div>
        <div>
          <h4>Home </h4>
          <a href='/'>
            <RiShieldKeyholeLine /> About
          </a>
          <a href='/'>
            <RiHomeGearLine /> Application
          </a>
          <a href='/'>
            <RiHomeGearLine /> Contacts
          </a>
          <a href='/'>
            <RiBuilding2Line /> SignIn
          </a>
        </div>
      </div>
      <p>&copy; Bursary evaluation system</p>
      <div className="social-icons">
            <a href='/'>
              <FaFacebook />
            </a>
            <a href='/'>
              <FaTwitter />
            </a>
            <a href='/'>
              <FaInstagram />
            </a>
            <a href='/'>
              <FaComments />
            </a>
          </div>
    </div>
  );
}

export default Footer;
